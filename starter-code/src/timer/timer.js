let seconds = 10;

const myInterval = setInterval(function() {
    if (seconds < 0) {
        document.querySelector('#counter').innerHTML = 'Time is Up';
        return clearInterval(myInterval);
    }

    document.querySelector('#counter').innerHTML = seconds--;
}, 1000);
