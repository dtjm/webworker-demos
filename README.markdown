Web Worker Demos
================

Just messing around with Web Workers.

This one starts up a bunch of Web Workers who each emit the value of
`Math.random()`

The master page then takes the average of all values that it has ever
seen for each worker. I was hoping to see the value converge to 0.5.
