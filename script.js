function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.querySelector('#session');

    hrs >= 12 ? session.innerHTML = 'PM': session.innerHTML = 'AM';
    hrs > 12 ?  hrs = hrs -12: hrs = hrs;

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime,10)
