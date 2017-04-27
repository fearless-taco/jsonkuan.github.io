var data = {};

window.onload = function() {
    formController();
}

document.getElementById("back-button").addEventListener("click", function() {
    return buttonClicked ? show() : hide();
});

function formController() {
    document.getElementById('pnum-form').onsubmit = function() {
        hide();
        setResult(getData());
        console.log(controlCheck(data.pnum));
        return false;
    }
}

function getData() {
    data.pnum = document.getElementById('input').value;
    data.isBday = isBirthday(data.pnum);
    return data;
}

function setResult(data) {
    document.getElementById('age-result').innerText = "In exaclty five years from today will be " + (calculateAge(data.pnum) + 5) + " years old.";
    document.getElementById('birthday-result').innerText = data.isBday ? "In eight years from today it will be your birthday!" : "Your birthday will never be on this day!";
    data.isValidPNum = controlCheck(data.pnum);
    document.getElementById('valid-input-result').innerText =
        data.isValidPNum ?  "You will manage to write your personnummer correctly at some point in the future." : "You will ammount to nothing. You cant even write your personnnumerm correcty!" ;
}

var hide = function() {
    document.getElementById('pnum-form').style.display = 'none';
    document.getElementById('form-result').style.display = 'block';
    buttonClicked= true;
}

var show = function() {
    document.getElementById('pnum-form').style.display = 'block';
    document.getElementById('form-result').style.display = 'none';
    buttonClicked = false;
}

//*** PERSONNUMMER LOGIC ***//

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    today = yyyy+''+mm+''+dd;
    return today
}

function isBirthday(personnummer) {
    var bday= personnummer.toString()
        var today = getCurrentDate().toString()
        return (today.substring(4,8) === bday.substring(4,8));
}

function calculateAge(personnummer) {
    var birthday = personnummer.toString();
    var today = getCurrentDate();
    var yyyy = today.substring(0,4);
    var age = parseInt(yyyy) - parseInt(birthday.substring(0,4));
    if( birthday.substring(4,8) <= today.substring(4,8)) var hasHadBirthday = true;

    return (hasHadBirthday ? age : age - 1);
}

function controlCheck(pnr) {
    /*
     * Function that checks if a swedish personnummer is valid.
     * Author: André Laszlo <andre@laszlo.nu>
     */

    // Do formatting and sanity control
    pnr = pnr.replace(/[^0-9]/g, ''); // only keep digits
    if (12 == pnr.length) // year format 1985 → 85
        pnr = pnr.substr(2);
    if (10 != pnr.length) // check length
        return false;
    if (pnr.substr(2,2) > 12) // check month
        return false;
    if (pnr.substr(4,2) > 31 || pnr.substr(4,2) == 0) // check date
        return false;
    var parts = pnr.split('').map(function(i){
        return Number(i);
    });
    // Then run the mod 10 algorithm to produce check digit
    var control = parts.pop();
    var inc = 0, multiplicator = 2, product;
    for (var i in parts) {
        product = parts[i] * multiplicator;
        if (product > 9)
            inc += product - 9;
        else
            inc += product;
        multiplicator = multiplicator == 1 ? 2 : 1;
    }
    var control_ = 10 - (inc - Math.floor(inc/10)*10);
    if (10 == control_)
        control_ = 0;
    return control == control_;
}
