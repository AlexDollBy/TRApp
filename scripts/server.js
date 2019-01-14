const myapp = require('./app');
const http = require('http').Server(myapp);

http.listen(3000,()=>{
    console.log('HTTP server started on port 3000');
});