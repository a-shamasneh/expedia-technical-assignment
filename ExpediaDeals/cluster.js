/***
Each Node.js process runs in a single thread 
 the memory limit can be bumped to ~1GB on 32-bit systems
 and ~1.7GB on 64-bit systems, 
 both memory and processing power can still 
 become bottlenecks for various processes.
 The elegant solution Node.js provides for scaling 
 up the applications is to split a single process
  into multiple processes or workers,
   in Node.js terminology. 
   This can be achieved through a cluster module. 
   The cluster module allows you to create child processes 
   (workers), which share all the server ports with the main Node
    process (master).
***/
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {

   
    require('./server.js');
}