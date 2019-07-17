let express = require('express')
let app = express()
let port = 5000

app.use(express.static('pages'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
})