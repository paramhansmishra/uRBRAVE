const uid = " abc123";
// console.log(uid);

// var fullName = 'Param Hans Mishra';
var fristName = 'Param';
var middelName = 'Hans';
var surName = 'Mishra';
var email = 'param110045@gmail.com';
var password = "123456";
var confirmPassword = " 123456";
var countryOfUserresiding = 'India';
var stateOfUserresiding = 'Delhi';
var courseCount = 0;
var isLoggedInWithGoogle = false;
var isLoggedInFromMeta = false;

// to take output we can use fullName = prompt("Enter Full Name"), but its not a better way 
// more generic way ◘ 
 //key is to use back-ticks and ◘
console.log(`
    With unique ID : ${uid}
    User Frist name is : ${fristName}
    User Middel name is : ${middelName}
    User Last name is : ${surName}
    User's Country is : ${countryOfUserresiding} & State is : ${stateOfUserresiding}
    and associated email is : ${email}
    using this password : ${password}
    No. of Courses held by user : ${courseCount}
    Logged-In with Google : ${isLoggedInWithGoogle}
    Logged-In with Meta : ${isLoggedInFromMeta}

`);