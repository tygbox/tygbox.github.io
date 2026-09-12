module.exports = {
  logLevel: 2,
  middleware: [
    function (req, res, next) {
      if (req.url.endsWith('.br')) {
        res.setHeader('Content-Encoding', 'br')
        if (req.url.endsWith('.js.br')) {
          res.setHeader('Content-Type', 'application/javascript')
        } else if (req.url.endsWith('.wasm.br')) {
          res.setHeader('Content-Type', 'application/wasm')
        } else if (req.url.endsWith('.data.br')) {
          res.setHeader('Content-Type', 'application/octet-stream')
        }
      }
      next()
    }
  ]
}
