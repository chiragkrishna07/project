// -------------------------------
// emailJS
// --------------------------------
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


