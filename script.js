function Tarkasta() {



var firstname = document.forms["register"]["firstname"];
var lastname = document.forms["register"]["lastname"];

    if (firstname.value == "") {
        window.alert("Give first name.");
        firstname.focus();
        return false;
    }
    if (firstname.value.length <=2){
        window.alert("atleast 3 letters")
        return false;
    }
    if (lastname.value == "") {
        window.alert("Give last name.");
        lastname.focus();
        return false;
    }
    if (lastname.value.length <=2){
        window.alert("atleast 3 letters")
        return false;
    }
    
    
    
    return true;
}