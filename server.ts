import express from 'express'
import next from 'next'
import { Request, Response } from 'express'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const domain = 'maridoporunahora.com'

const app = next({
  dev,
  // Plesk compatibility settings
  hostname: domain,
  port,
  customServer: true,
})
const handle = app.getRequestHandler()
app
  .prepare()
  .then(() => {
    const server = express()
    // Pushion & Plesk compatibility middleware
    server.use((req: Request, res: Response, next) => {
      // Ensure proper domain handling
      if (!dev && req.headers.host !== domain) {
        return res.redirect(301, `https://${domain}${req.url}`)
      }
      res.setHeader('X-Frame-Options', 'SAMEORIGIN')
      res.setHeader('X-Content-Type-Options', 'nosniff')
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
      next()
    })
    // Handle all requests with Next.js
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res)
    })
    server.listen(port, (err?: Error) => {
      if (err) throw err
      console.log(`> Ready on http://${domain}:${port}`)
      // Pushion compatibility - log startup
      if (process.env.PUSHION_ENV) {
        console.log('Running in Pushion environment')
      }
    })
  })
  .catch((err: Error) => {
    console.error('Server failed to start:', err)
    process.exit(1)
  })
