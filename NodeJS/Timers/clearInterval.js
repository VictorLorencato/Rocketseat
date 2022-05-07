const timeOut = 1000;
const done = () => {
    console.log('Done!');
}

let interval = setInterval(done, timeOut);

setTimeout( ()=> clearInterval(interval), 5000)
