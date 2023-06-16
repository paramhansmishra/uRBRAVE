// Create an application using following rules
// admin gets full access
// sub admin get acces to create/delete course
// testprep get access to create/delete courset est
// consumer get access to purchase/consume course

// prefer to use {switch-case}

var user = "consumer";

switch (user) {
    case "admin":
        console.log("you full access to courses");
        break;
    case "subAdmin":
        console.log("You can create/delete courses");
        break;

    case "testPrep":
        console.log("You can create/delete Test  for students");
        break;
    case "student":
        console.log("You can purchase/study opted courses");
        break;


    default:
        console.log("Trail User");
        break;
}