// show user a signout button if he is logged-in/Authenticated
// otherwise show him Login-in/Sign-up option
//ternary = ? - Condidional(var ? if : else)
var auth = true;
// if (auth == true) {
//     console.log("Click here to Sign-Out");
// } else {
//     console.log("Please Login /Sign-up to proceed");
// }

auth ? console.log("Click here to Sign-out") : console.log("Please Login/Sign-up to proceed");