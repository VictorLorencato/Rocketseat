const {EventEmitter} = require('events')
const event  = new EventEmitter

event.on('saySomething', (message) => {
    console.log('Eu te ouvi', message)
})
/*event.once('saySomething', (message) => {
    console.log('Eu te ouvi', message)
})*/
    
event.emit('saySomething', "viado")
event.emit('saySomething', "corno")