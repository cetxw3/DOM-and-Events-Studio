// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOffBtn = document.getElementById("takeoff");
    takeOffBtn.addEventListener('click', function() {
       let isReadyToLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
       if(isReadyToLaunch) {
           let flightStatus = document.getElementById("flightStatus");
           flightStatus.innerText = "Shuttle in flight.";
           let shuttleFlightScreen = document.getElementById("shuttleBackground");
           shuttleFlightScreen.setAttribute("style", "background-color: #0000FF");
           let shuttleHeight = document.getElementById("spaceShuttleHeight");
           shuttleHeight.innerText = 10000;
       }
    })
    let landBtn = document.getElementById("landing");
    landBtn.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "The shuttle has landed.";
        let shuttleFlightScreen = document.getElementById("shuttleBackground");
        shuttleFlightScreen.setAttribute("style", "background-color: #008000");
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerText = 0;
        let rocketImg = document.getElementById("rocket");
        rocketImg.style.bottom = "0px";
        rocketImg.style.left = "163px";
    })
    let missionAbortBtn = document.getElementById("missionAbort");
    missionAbortBtn.addEventListener("click", function() {
        let missionAbortResponse = window.confirm("Confirm that you want to abort the mission.");
        if(missionAbortResponse) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerText = "Mission aborted.";
            let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: #008000");
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerText = 0;
            let rocketImg = document.getElementById("rocket");
            rocketImg.style.bottom = "0px";
            rocketImg.style.left = "163px";
        }
    })
    let upBtn = document.getElementById("up");
    upBtn.addEventListener("click", function( event ) {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let shuttleHeightAmount = Number(shuttleHeight.innerText);
        let rocketImg = document.getElementById("rocket");
        if(shuttleHeightAmount < 320000) {
            shuttleHeightAmount += 10000;
            shuttleHeight.innerText = shuttleHeightAmount;
            rocketImg.style.bottom = shuttleHeightAmount/1000 + "px";
        } else {
            event.stopPropagation();
        }
    })
    let downBtn = document.getElementById("down");
    downBtn.addEventListener("click", function( event ) {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let shuttleHeightAmount = Number(shuttleHeight.innerText);
        let rocketImg = document.getElementById("rocket");
        if(shuttleHeightAmount > 0) {
            shuttleHeightAmount -= 10000;
            shuttleHeight.innerText = shuttleHeightAmount;
            rocketImg.style.bottom = shuttleHeightAmount/1000 + "px";
        } else {
            event.stopPropagation();
        }
    })
    let rightBtn = document.getElementById("right");
    rightBtn.addEventListener("click", function( event ) {
        let horizontalLocation = document.getElementById("spaceShuttleHorizontalLocation");
        let horizontalLocationAmount = Number(horizontalLocation.innerText);
        let rocketImg = document.getElementById("rocket");
        if(horizontalLocationAmount < 333) {
            horizontalLocationAmount += 10;
            horizontalLocation.innerText = horizontalLocationAmount;
            rocketImg.style.left = horizontalLocationAmount + "px";
        } else {
            event.stopPropagation();
        }
    })
    let leftBtn = document.getElementById("left");
    leftBtn.addEventListener("click", function( event ) {
        let horizontalLocation = document.getElementById("spaceShuttleHorizontalLocation");
        let horizontalLocationAmount = Number(horizontalLocation.innerText);
        let rocketImg = document.getElementById("rocket");
        if(horizontalLocationAmount > -7) {
            horizontalLocationAmount -= 10;
            horizontalLocation.innerText = horizontalLocationAmount;
            rocketImg.style.left = horizontalLocationAmount + "px";
        } else {
            event.stopPropagation(); 
        }
      

    })
});
