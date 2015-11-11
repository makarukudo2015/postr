var restify = require('restify');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
    res.send("Test" + req.params.name);
    return next();
});

server.listen(process.env.PORT || 3001, process.env.IP || "0.0.0.0", function () {
  console.log('%s listening at %s', server.name, server.url);
});