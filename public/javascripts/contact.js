const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        alert("Message sent successfully!");

        contactForm.reset();
    });

}