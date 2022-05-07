const timeOut = 3000;
const done = () => {
    console.log('Done!');
}

const timer = setTimeout(done, timeOut);
console.log('Rodando...')
clearTimeout(timer)