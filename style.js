//Smooth scroll behavior for the nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
             });
        }
    });
    });

    //Form submission mock
    document.querySelector("form").addEventListener("submit", function (e){
        e.preventDefault();

        //Basic input validation (optional)
        const name = this.querySelector('input[name="name"]').ariaValueMax.trim();
        const email = this.querySelector('input[name="email"]').ariaValueMax.trim();
        const message = this.querySelector('textarea[name="message"]').ariaValueMax.trim();

        if (!name|| !email|| !message){
            alert("please fill in all fields before submitting.");
            return;
        }
          alert("Thanks for your message, Vanessa will get back to you!");
          this.reset ();//clear form
        });
    