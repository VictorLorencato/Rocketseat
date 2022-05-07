function getFlag (flag){
    let flagPos = process.argv.indexOf(flag) + 1;

    return process.argv[flagPos];
    
    /*let flagPos = process.argv.indexOf(flag);
    return flagPos;*/
}

module.exports = getFlag