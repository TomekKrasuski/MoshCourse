console.log(checkSpeed(135));

function checkSpeed(speed) {
    speedLimit = 70;
    suspendPoint = 12;

    if (speed - speedLimit >= 5) {
        let point = Math.floor((speed - speedLimit) / 5);
        if (point <= suspendPoint) {
            return `Points : ${point}`;
        } else return "Licence suspended";
    } else {
        return "Ok!";
    }
}