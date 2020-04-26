
const convertNumberToTime = (num) => {
    let secNum = parseInt(num, 10);
    let minutes = Math.floor((secNum) / 60);
    let seconds = secNum - (minutes * 60);

    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes + ':' + seconds;
}

export {
    convertNumberToTime
}