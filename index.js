const http = require('http')

const hostName = 'localhost'
const port = 3000

const server = http.createServer(
                    (req, res) => {
                        console.log(req.headers)

                        res.statusCode = 200
                        res.setHeader = ("Content-type", "text/html");
                        res.end("<html><body><h1>Hello World!</h1></body></html>")
                    }
                )

server.listen(port, hostName, () => {console.log(`Server up and running at http://${hostName}:${port}`)})