searchForm = document.querySelector('.search-book');

document.querySelector('#search-button').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-button').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}


window.onscroll = () =>{
    
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .headerline-2').classList.add('active');
    }
    else{
        document.querySelector('.header .headerline-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .headerline-2').classList.add('active');
    }
    else{
        document.querySelector('.header .headerline-2').classList.remove('active');
    }
}

var swiper = new Swiper(".books-slider", {
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
}
);
var swiper = new Swiper(".featured-slider", {
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        786: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
}
);
var swiper = new Swiper(".arrivals-slider", {
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
}
);
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 5,
    grabCursor: true,
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 1900,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
}
);
var swiper = new Swiper(".blog-slider", {
    spaceBetween: 5,
    grabCursor: true,
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 1900,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
}
);




//firebase

// sign-up

function register(){
   var email = document.getElementById('userEmail').value
    var password = document.getElementById('userPassword').value
    var username = document.getElementById('userName').value
    //i think i should try to validate inputs, therefore googled it and found this 
    if (validateEmail(email)==false || validatePassword(password)== false) {
        alert('Email or password is wrong')
            return        
    }

    //now auth

    auth.createUserWithEmailPassword(email,password)
    .then(function(){
        // user variable
        var  user = auth.currentUser
        //adding to firebase
        var database_ref = database.ref()
        
        //user data
        var user_data = { 
            email : email ,
            username :username ,
            last_login :  Date.now() 
        }
        database_ref.child('users/' + user.uid).set(user_data)



        alert('user created!')
    })
    .catch(function(error){
        var error_code = error.code;
        var error_message = error.message

        alert(error_message)
    })






}
//email-validation
// from where i learned it: "https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript"
function validateEmail(email) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
   if (validRegex.test(email) == true){
    return true
   }
   else{
    return false
   }
  
  }
 //i think username & user-password validation is not important
 //but we can adjust the minimum input password length
 function validatePassword(password){
    if (password < 7)  {
        return false
    } else {
        return true
    }
 }


