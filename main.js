var execFile = require('child_process').execFile;
var githubhook = require('githubhook');
var github = githubhook({
    host: '127.0.0.1',
    port: 3050,
    secret: 'keepitsafe'
});

console.log("Listening!");
github.listen();

github.on('*', function (event, repo, ref, data) {
    console.log("A webhook event has been fired!");
});

github.on('web-hook-demo:refs/heads/master', function (event, data) {
    console.log("The master branch of web-hook-demo has recieved a push event!");
    
    var execOptions = {
        maxBuffer: 1024 * 1024 // Increase max buffer to 1mb
    };

    execFile('/var/www/hackeryou/deployer/deploy.sh', execOptions, function(error, stdout, stderr) {
        if( error ) {
            console.log(error);
        }
    });
});