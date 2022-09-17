let nums = document.querySelectorAll('.counter-num .counter-nums');
let section = document.querySelectorAll('.about');
let skills = document.querySelector('.skills');
let progress = document.querySelectorAll(".progress span")



let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if(window.scrollY >= skills.offsetTop - 300){
        console.log('Done');
        progress.forEach((proges)=> {
            proges.style.width = proges.dataset.width;
        })
    }
    if(window.scrollY > 0){
       navbar.classList.add('active');
    } else{
       navbar.classList.remove('active');
    }
    if(window.scrollY > 50){
        document.querySelector('header .icons-blog').style.opacity = 1
    } else{
        document.querySelector('header .icons-blog').style.opacity = 0
    }
};
$(document).ready(function () {
    nums.forEach(num => startCount(num) );

    function startCount(el) { 
        let goal = el.dataset.goal;
        let count = setInterval(()=> {
            el.textContent++;
            if(el.textContent == goal){
                clearInterval(count);
            }
        }, 8000 / goal);
    }
    $("#loading .spinner").fadeOut(900, function(){
        $("#loading").fadeOut(3000, function(){
            $("#loading").fadeOut(1500 , function(){
                $("body").css("overflow-y", 'auto');
            });
        })
    });

    let typed = new Typed('.element', {
        strings: ['Im A FrontEnd', 'Im A Freelancer.'],
        typeSpeed: 100,
        loop: true,
    });  
});