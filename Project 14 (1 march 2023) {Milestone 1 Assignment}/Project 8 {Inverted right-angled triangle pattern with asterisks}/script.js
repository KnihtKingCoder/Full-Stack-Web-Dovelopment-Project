function patternInvertedTrinagle(des){
    let pattern='';
    for(let i=des; i>=0; i--) {
        for(let j=1; j<=i; j++) {
            pattern += '*';
        }
        pattern += '\n';
    }
    console.log(pattern);
}

patternInvertedTrinagle(6);