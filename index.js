const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav a").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// document.getElementsById('myform').addEventListener('submit', function(event){
//     event.preventDefault();

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var comment = document.getElementById('comment').value;

//     if (name.trim() === ''){
//         alert('Please enter your name.');
//     }
//     else if (email.trim() === ''){
//         alert('Please enter your email address.');
//     }
//     else if (comment.trim() === ''){
//         alert('Please enter your feedback.');
//     }
//     else{
//         alert('Your records submitted successfully');
//     }
// });