const { request, response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response)=>{
    // console.log(request);
    response.send('<h1>Hello, world!</h1>');
});

app.get('/test', (req, res)=>{
    res.write('<p>test1</p>');
    res.write('<p>test2</p>');
    res.send();
});

//ctrl+c

app.listen(3000, ()=>{
    console.log('Server is up and running on port 3000')
})