// AOS Animation
AOS.init({
    duration:1000,
    once:true
});

// Sticky Navbar
window.addEventListener("scroll",function(){

    const navbar=document.querySelector(".custom-navbar");

    if(window.scrollY>80){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

// Active Menu
const navLinks=document.querySelectorAll(".nav-link");

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

}); 




// Counter Animation

const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const updateCounter = ()=>{

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }
                else{

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});



// Back To Top

const backTop = document.getElementById("backTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        backTop.style.display="flex";

    }
    else{

        backTop.style.display="none";

    }


});


backTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});









// Remove Loader

window.addEventListener("load",()=>{

    document.querySelector(".loader").style.display="none";

});







// Close navbar after click

const navItems = document.querySelectorAll(".nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");


navItems.forEach(item=>{

    item.addEventListener("click",()=>{


        if(navbarCollapse.classList.contains("show")){


            document
            .querySelector(".navbar-toggler")
            .click();


        }


    });


});