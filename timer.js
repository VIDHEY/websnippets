var countDownDate = new Date("Apr 12, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    days=("0"+days).slice(-2);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours=("0"+hours).slice(-2);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes=("0"+minutes).slice(-2);
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds=("0"+seconds).slice(-2);
    
    // Output the result in an element with id="demo"
    if (distance <= 0) {
        clearInterval(x);
        days=0;
        hours=0;
        minutes=0;
        seconds=0;
    }
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the count down is over, write some text 
    
}, 1000);
