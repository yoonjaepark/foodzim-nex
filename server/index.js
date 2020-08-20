const http = require('http')
const url = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

const port = 8080

app.prepare()
    .then(() => {
        http.createServer((req, res) => {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = url.parse(req.url, true) || {}

            if (parsedUrl.pathname === '/login') {

                app.render(req, res, '/login', parsedUrl.query)
            } else {
                handle(req, res, parsedUrl)
            }
        })
            .listen(port, (err) => {
                if (err) {
                    throw err
                }
                console.log(`\nApplication Server listen: http://localhost:${port}\n`)
            })
    })
