import express from 'express'
import next from 'next'
import { Request, Response } from 'express'

/**
 * @description - The port number on which the server will listen.
 * This value is parsed from the `PORT` environment variable. If the variable is not set,
 * it defaults to `3000`.
 */
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const domain = 'maridoporunahora.com'

/**
 * @description - Initializes a Next.js application instance with custom server configuration.
 * @param dev - Indicates whether the application is running in development mode.
 * @param domain - The hostname to use when not in development mode.
 * @param port - The port number on which the server will listen.
 * @param customServer - A flag to enable custom server functionality.
 * @returns An instance of the Next.js application configured with the specified options.
 */
const app = next({
  dev,
  ...(dev ? {} : { hostname: domain }),
  port,
  customServer: true,
})
/**
 * @description - Handles incoming HTTP requests using the application's request handler.
 * This constant is assigned the request handler function returned by `app.getRequestHandler()`,
 * which is typically used to process all incoming requests in a Next.js or similar server setup.
 * @see app.getRequestHandler
 */
const handle = app.getRequestHandler()
app
  .prepare()
  .then(() => {
    const server = express()
    server.use((req: Request, res: Response, next) => {
      if (!dev && req.headers.host && ![domain, `www.${domain}`].includes(req.headers.host)) {
        return res.redirect(301, `https://${domain}${req.url}`)
      }
      res.setHeader('X-Frame-Options', 'SAMEORIGIN')
      res.setHeader('X-Content-Type-Options', 'nosniff')
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
      next()
    })
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res)
    })
    server.listen(port, (err?: Error) => {
      if (err) throw err
      console.log(`--> Running in ${dev ? 'development' : 'production'} mode`)
      console.log(`--> Ready on http://${dev ? 'localhost' : domain}:${port}`)
      if (process.env.PHUSION_ENV) {
        console.log('Running in Phusion environment')
      }
    })
  })
  .catch((err: Error) => {
    console.error('Server failed to start:', err)
    process.exit(1)
  })
