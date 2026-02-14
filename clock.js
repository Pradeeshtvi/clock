
function displayTime(){
   
    let dateTime = new Date();
        let hr = dateTime.getHours();
        let min = dateTime.getMinutes();
        let sec = dateTime.getSeconds();
    
     document.getElementById('hour').innerHTML=hr
     document.getElementById('mins').innerHTML=min
     document.getElementById('sec').innerHTML=sec}
setInterval(displayTime,1000)