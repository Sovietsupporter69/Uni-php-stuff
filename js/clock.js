(function(){
    const myNode = document.createElement("div");  
    const timeNode = document.createElement("div");

    
    let ddate = new Date();
    document.getElementById("digitalClock").appendChild(myNode).innerHTML = ddate.toDateString();
    document.getElementById("digitalClock").appendChild(timeNode);
})();

setInterval(function(){
    timeNode.innerHTML = ddate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
})();