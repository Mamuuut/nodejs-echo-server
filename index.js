// https://gist.github.com/tedmiston/5935757
// https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options

var net = require('net');

var iNbConnections = 0;

var server = net.createServer(function(socket)
{
    console.log(++iNbConnections, 'connected client(s)');
    socket.write('Echo server\r\n');
    socket.pipe(socket);

    socket.on('close', function()
    {
        console.log(--iNbConnections, 'connected client(s)');
    });

});

console.log('Listening on 127.0.0.1:8080');
server.listen(8080, '127.0.0.1');