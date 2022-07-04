const express = require('express');
const server = express();

server.get('/', (req, res) => {
res.json(
    {
        title: 'Node express API',
    
        version: '0.0.1'
        
})
});

server.use('/1', (req, res) => {
    res.send('<b>Title:</b> Node express API<br><b>Version:</b> 0.0.1')

    next()
})


server.listen(3000, () =>{
console.log('Servidor esta funcionando...')
});