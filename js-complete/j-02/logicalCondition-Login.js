//  Allow user to access course if he has;
// logged-in from Google or;
// logged-in from Meta or;
// logged-in svia email; 

var  email = true;
var  meta = false;
var  google = false;

if (email || meta || google) {  //or statements{||}
        console.log("Login Success");    
} else {
    console.log("Please Login / Sign-up");
}
