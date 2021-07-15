clock=document.getElementById('clock');
function showTime() {
time=new Date();
des = time.toLocaleTimeString();
clock.textContent=des;
};

setInterval(showTime,1000);
