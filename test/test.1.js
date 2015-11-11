// init the test client
var restify = require('restify');

var client = restify.createJsonClient({
    version: '*',
    url: 'http://dsnyprj-makarukudo.c9users.io:8080'
});

describe('echo service', function() {

    // Test #1
    describe('200 response check', function() {
        it('should get a status true', function(done) {
            client.get('/echo/mike', function(err, req, res, data) {
                if (err) {
                    throw new Error(err);
                }
                else {
                    if (data.status == 200) {
                        throw new Error('invalid response from /hello/world');
                    }
                    done();
                }
            });
        });
    });
});