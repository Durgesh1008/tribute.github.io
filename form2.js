function check() {

    var uname = document.far.uname.value
    var uem = document.far.uem.value
    var mob = document.far.mob.value
    var age = document.far.age.value

    if (uname == "") {
        // alert("Enter your full name")
        document.getElementById("username").style.border = '2px solid red'
        document.getElementById("un").style.visibility = 'visible'
        return false
    }
    if (uem == "") {
        // alert("Enter your email")
        document.getElementById("myem").style.border = '2px solid red'
        document.getElementById("ue").style.visibility = 'visible'
        return false
    }
    // if (uem != "@") {
    //     document.getElementById("myem").style.border = '2px solid red'
    //     document.getElementById("ue").style.visibility = 'visible'
    //     return false
    // }
    if (mob == "") {
        // alert("Enter phone number")
        document.getElementById("mymo").style.border = '2px solid red'
        document.getElementById("um").style.visibility = 'visible'
        return false
    }
    if (isNaN(mymo.value)) {
        alert("Please Enter Valid Number")
        return false
    }
    if (mob.length > 10) {
        alert("Enter valid number")
        return false
    }
    if (mob.length < 10) {
        alert("Enter valid number")
        return false
    }
    // if (select.value == "Select City") {
    //     alert("Please Select city")
    //     return false
    // }
    if (age == "") {
        document.getElementById("myage").style.border = '2px solid red'
        document.getElementById("ua").style.visibility = 'visible'
        // alert("Please Enter Age")
        return false
    }
    else {
        alert("form submit successfully")
        hello()
        return true
    }
}

function myFunc(event) {
    event.preventDefault()

    var full_name = document.getElementById("uname").value;
    var your_email = document.getElementById("uem").value;
    var your_mob = document.getElementById("mob").value;
    var age = document.getElementById("age").value;
    localStorage.setItem('full_name', full_name);
    localStorage.setItem('your_email', your_email);
    localStorage.setItem('your_mon', your_mob);
    localStorage.setItem('age', age);


    console.log("name <br/>"+full_name+"email <br>/"+your_email+"mobile <br/>"+your_mob+"age <br/>"+age)
}


function hello() {
    document.getElementById("msg").style.fontSize = "14px"
    document.getElementById("msg").innerHTML = "Your tribute is successfully submitted"
}

var loader = document.getElementById("reloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
