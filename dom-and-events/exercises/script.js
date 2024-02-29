function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    missionAbort.addEventListener('mouseover', event1 => {
        missionAbort.style.backgroundColor = 'red';
    });

    missionAbort.addEventListener('mouseout', event2 => {
        missionAbort.style.backgroundColor = '';
    });

    missionAbort.addEventListener('click', event3 => {
        let response = prompt("Are you ready to abort the mission? Yes/No" );
        if (response === "Yes") {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home';
        }    
    });
}

window.addEventListener("load", init);
