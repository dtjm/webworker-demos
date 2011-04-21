// Do some work!
var id;
var go = false;

var work = function() {
    postMessage({id: id, value: Math.random()});

    if(go) {
        setTimeout(work, 0);
    }
}

onmessage = function(event){
    var msg = event.data;

    if(typeof msg.id !== "undefined") {
        id = msg.id;
    }

    if(msg.start) {
        go = true;
        work();
    } else if (msg.stop) {
        go = false;
    }
}
