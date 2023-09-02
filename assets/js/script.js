const imageSlides = document.querySelectorAll(".image-slide");
let currentSlideIndex = 0;

function showNextSlide() {
  imageSlides[currentSlideIndex].classList.remove("active");
  currentSlideIndex = (currentSlideIndex + 1) % imageSlides.length;
  imageSlides[currentSlideIndex].classList.add("active");
}

// Automatically transition images every 3 seconds
setInterval(showNextSlide, 2000);

// function validateForm() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;
  
//     // Validate the name field.
//     if (name.trim() == '') {
//       alert('Please enter your name.');
//       return false;
//     }
  
//     // Validate the email field.
//     if (!/^\w+@\w+\.\w+$/.test(email)) {
//       alert('Please enter a valid email address.');
//       return false;
//     }
  
//     // Validate the phone number field.
//     if (!/^\d{10}$/.test(phone)) {
//       alert('Please enter a valid phone number.');
//       return false;
//     }
  
//     // Validate the subject field.
//     if (subject.trim() == '') {
//       alert('Please enter a subject.');
//       return false;
//     }
  
//     // Validate the message field.
//     if (message.trim() == '') {
//       alert('Please enter a message.');
//       return false;
//     }
  
//     // The form is valid, so submit it.
//     return true;
//   }

//   document.getElementById('form-submit').onclick = function() {
//     if (!validateForm()) {
//       return false;
//     }
//   };
  
emailjs.init("mBiXPCOTYL6d7mepo");

  // Define the sendEmail() function
  function sendEmail() {
    console.log("sendEmail() function triggered");
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone_number: document.getElementById("phone").value,
      subject :document.getElementById("subject").value ,
      message  : document.getElementById("message").value,
    };
  

  const serviceID="service_x7g07yr" ;
  const templateID="template_s4ajw0d" ;


  emailjs.send(serviceID,templateID,params)
  .then(
    res=>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("phone").value="";
      document.getElementById("subject").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("your message has been sent sucessfully");
    })
  .catch((err) => console.log(err));
}

document.addEventListener("DOMContentLoaded", function () {
const filterLinks = document.querySelectorAll(".products-filter a");
const contentDivs = document.querySelectorAll(".conta");

filterLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const selectedFilter = this.getAttribute("data-filter");

    // Hide all content divs
    contentDivs.forEach(div => {
      div.classList.add("inactive");
    });

    // Show the selected content div
    const selectedDiv = document.querySelector(`.${selectedFilter}`);
    if (selectedDiv) {
      selectedDiv.classList.remove("inactive");
    }
  });
});
});
      

