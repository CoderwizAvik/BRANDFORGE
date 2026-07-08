/* ===========================================================
   AI Calendar Intelligence Agent
   PART 1 : Global JavaScript
   Counter • Navbar • Scroll • Reveal • Mobile Menu
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       COUNTER ANIMATION
    ========================= */

    const counters = document.querySelectorAll(".counter");
    let counterStarted = false;

    function startCounters() {

        if (counterStarted) return;

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const speed = target / 120;

            function updateCounter() {

                current += speed;

                if (current < target) {

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            }

            updateCounter();

        });

    }

    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealItems = document.querySelectorAll(
        ".stat-card,.timeline-card,.suggestion-card,.workflow-card,.glass-card,.analytics-card,.price-card,.info-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition =
                    "all .8s ease";

            }

        });

    }, {
        threshold: .15
    });

    revealItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(60px)";

        observer.observe(item);

    });

    /* =========================
       START COUNTERS WHEN HERO
       IS VISIBLE
    ========================= */

    const heroStats = document.querySelector(".stats");

    if (heroStats) {

        const heroObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounters();

                }

            });

        });

        heroObserver.observe(heroStats);

    }

    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(8,16,32,.92)";

            header.style.boxShadow =
                "0 15px 40px rgba(0,0,0,.35)";

            header.style.padding = "14px 8%";

        } else {

            header.style.background =
                "rgba(8,16,32,.65)";

            header.style.boxShadow = "none";

            header.style.padding = "18px 8%";

        }

    });

    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const id = this.getAttribute("href");

            if (id === "#") return;

            e.preventDefault();

            const section = document.querySelector(id);

            if (section) {

                section.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

    /* =========================
       BUTTON RIPPLE EFFECT
    ========================= */

    document.querySelectorAll("button,.primary-btn,.secondary-btn,.btn-nav")
        .forEach(button => {

            button.addEventListener("click", function (e) {

                const ripple = document.createElement("span");

                ripple.className = "ripple";

                const size = Math.max(
                    this.clientWidth,
                    this.clientHeight
                );

                ripple.style.width = size + "px";
                ripple.style.height = size + "px";

                ripple.style.left =
                    e.offsetX - size / 2 + "px";

                ripple.style.top =
                    e.offsetY - size / 2 + "px";

                this.appendChild(ripple);

                setTimeout(() => {

                    ripple.remove();

                }, 600);

            });

        });

});
/* ===========================================================
   PART 2 : HERO ANIMATIONS
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       AI TYPING EFFECT
    ========================================= */

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        const words = [
            "Into Content Opportunities",
            "Into Viral Content",
            "Into Personal Brand Growth",
            "Into AI Generated Posts",
            "Into Audience Engagement"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex++);

                if (charIndex > currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;

                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length)
                        wordIndex = 0;

                }

            }

            setTimeout(typeEffect, deleting ? 45 : 90);

        }

        typeEffect();

    }

    /* =========================================
       HERO ENTRANCE
    ========================================= */

    const heroItems = document.querySelectorAll(
        ".hero-left>*"
    );

    heroItems.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";

        setTimeout(() => {

            item.style.transition =
                "all .8s ease";

            item.style.opacity = "1";
            item.style.transform =
                "translateY(0)";

        }, index * 180);

    });

    /* =========================================
       DASHBOARD FLOAT
    ========================================= */

    const dashboard = document.querySelector(".dashboard");

    if (dashboard) {

        let angle = 0;

        function floating() {

            angle += 0.02;

            dashboard.style.transform =
                `translateY(${Math.sin(angle) * 10}px)`;

            requestAnimationFrame(floating);

        }

        floating();

    }

    /* =========================================
       MOUSE GLOW
    ========================================= */

    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

    /* =========================================
       HERO BUTTON HOVER
    ========================================= */

    document.querySelectorAll(".primary-btn,.secondary-btn")
        .forEach(btn => {

            btn.addEventListener("mouseenter", () => {

                btn.style.transform =
                    "translateY(-6px) scale(1.03)";

            });

            btn.addEventListener("mouseleave", () => {

                btn.style.transform =
                    "translateY(0) scale(1)";

            });

        });

    /* =========================================
       HERO IMAGE TILT
    ========================================= */

    const heroRight = document.querySelector(".hero-right");

    if (heroRight) {

        heroRight.addEventListener("mousemove", (e) => {

            const rect =
                heroRight.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - .5) * 12;

            const rotateX =
                ((y / rect.height) - .5) * -12;

            dashboard.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

        heroRight.addEventListener("mouseleave", () => {

            dashboard.style.transform =
                "rotateX(0) rotateY(0)";

        });

    }

});
/* ===========================================================
   PART 3 : CALENDAR INTELLIGENCE
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       TIMELINE CARD REVEAL
    ========================================= */

    const timelineCards = document.querySelectorAll(".timeline-card");

    const timelineObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateX(0)";

            }

        });

    },{threshold:.2});

    timelineCards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateX(-60px)";
        card.style.transition=`all .8s ease ${index*0.15}s`;

        timelineObserver.observe(card);

    });

    /* =========================================
       ACTIVE EVENT HIGHLIGHT
    ========================================= */

    timelineCards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            timelineCards.forEach(c=>{

                c.classList.remove("active");

            });

            card.classList.add("active");

        });

    });

    /* =========================================
       AI SUGGESTION CARD ANIMATION
    ========================================= */

    const suggestionCards=document.querySelectorAll(".suggestion-card");

    suggestionCards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(80px)";

        setTimeout(()=>{

            card.style.transition="all .8s ease";
            card.style.opacity="1";
            card.style.transform="translateY(0)";

        },400+(index*250));

    });

    /* =========================================
       GENERATE BUTTON EFFECT
    ========================================= */

    const generateButtons=document.querySelectorAll(".generate-btn");

    generateButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            const originalText=button.innerHTML;

            button.innerHTML="🤖 AI Generating...";

            button.disabled=true;

            setTimeout(()=>{

                button.innerHTML="✅ Generated";

                setTimeout(()=>{

                    button.innerHTML=originalText;
                    button.disabled=false;

                },1800);

            },2000);

        });

    });

    /* =========================================
       AUTO HIGHLIGHT TIMELINE
    ========================================= */

    let currentIndex=0;

    setInterval(()=>{

        timelineCards.forEach(card=>{

            card.classList.remove("active");

        });

        if(timelineCards.length){

            timelineCards[currentIndex].classList.add("active");

            currentIndex++;

            if(currentIndex>=timelineCards.length){

                currentIndex=0;

            }

        }

    },3000);

    /* =========================================
       FLOATING AI ICON
    ========================================= */

    const robot=document.querySelector(".robot-icon");

    if(robot){

        let angle=0;

        function floatRobot(){

            angle+=0.03;

            robot.style.transform=
            `translateY(${Math.sin(angle)*8}px)
             rotate(${Math.sin(angle)*4}deg)`;

            requestAnimationFrame(floatRobot);

        }

        floatRobot();

    }

    /* =========================================
       CARD PARALLAX
    ========================================= */

    suggestionCards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*10;

            const rotateX=((y/rect.height)-0.5)*-10;

            card.style.transform=`
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="perspective(800px) rotateX(0) rotateY(0) scale(1)";

        });

    });

});
/* ===========================================================
   PART 4 : AI WORKFLOW ENGINE
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       WORKFLOW STEP REVEAL
    ===================================== */

    const workflowCards = document.querySelectorAll(".workflow-card");

    const workflowObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("workflow-show");

            }

        });

    },{threshold:.2});

    workflowCards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(80px)";
        card.style.transition=`all .8s ease ${index*0.2}s`;

        workflowObserver.observe(card);

    });

    /* =====================================
       AUTO STEP ACTIVATION
    ===================================== */

    let currentStep = 0;

    function activateStep(){

        workflowCards.forEach(card=>{

            card.classList.remove("active-workflow");

        });

        if(workflowCards.length){

            workflowCards[currentStep].classList.add("active-workflow");

            currentStep++;

            if(currentStep>=workflowCards.length){

                currentStep=0;

            }

        }

    }

    activateStep();

    setInterval(activateStep,2500);

    /* =====================================
       AI ENGINE PULSE
    ===================================== */

    const aiCore=document.querySelector(".core-circle");

    if(aiCore){

        let scale=1;

        let increase=true;

        function pulse(){

            if(increase){

                scale+=0.002;

                if(scale>=1.08){

                    increase=false;

                }

            }else{

                scale-=0.002;

                if(scale<=1){

                    increase=true;

                }

            }

            aiCore.style.transform=`scale(${scale})`;

            requestAnimationFrame(pulse);

        }

        pulse();

    }

    /* =====================================
       ENGINE FLOAT
    ===================================== */

    const engine=document.querySelector(".engine");

    if(engine){

        let angle=0;

        function floatEngine(){

            angle+=0.01;

            engine.style.transform=`translateY(${Math.sin(angle)*6}px)`;

            requestAnimationFrame(floatEngine);

        }

        floatEngine();

    }

    /* =====================================
       STEP HOVER
    ===================================== */

    workflowCards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-15px) scale(1.04)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0) scale(1)";

        });

    });

    /* =====================================
       ICON ROTATION
    ===================================== */

    const icons=document.querySelectorAll(".step-icon");

    icons.forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.style.transform="rotate(360deg) scale(1.2)";
            icon.style.transition=".7s";

        });

        icon.addEventListener("mouseleave",()=>{

            icon.style.transform="rotate(0deg) scale(1)";

        });

    });

    /* =====================================
       DATA FLOW EFFECT
    ===================================== */

    const arrows=document.querySelectorAll(".workflow-arrow");

    setInterval(()=>{

        arrows.forEach((arrow,index)=>{

            setTimeout(()=>{

                arrow.style.color="#00D4FF";
                arrow.style.transform="scale(1.3)";

                setTimeout(()=>{

                    arrow.style.color="#5B7CFF";
                    arrow.style.transform="scale(1)";

                },400);

            },index*300);

        });

    },2500);

});
/* ===========================================================
   PART 4 : AI WORKFLOW ENGINE
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       WORKFLOW STEP REVEAL
    ===================================== */

    const workflowCards = document.querySelectorAll(".workflow-card");

    const workflowObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("workflow-show");

            }

        });

    },{threshold:.2});

    workflowCards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(80px)";
        card.style.transition=`all .8s ease ${index*0.2}s`;

        workflowObserver.observe(card);

    });

    /* =====================================
       AUTO STEP ACTIVATION
    ===================================== */

    let currentStep = 0;

    function activateStep(){

        workflowCards.forEach(card=>{

            card.classList.remove("active-workflow");

        });

        if(workflowCards.length){

            workflowCards[currentStep].classList.add("active-workflow");

            currentStep++;

            if(currentStep>=workflowCards.length){

                currentStep=0;

            }

        }

    }

    activateStep();

    setInterval(activateStep,2500);

    /* =====================================
       AI ENGINE PULSE
    ===================================== */

    const aiCore=document.querySelector(".core-circle");

    if(aiCore){

        let scale=1;

        let increase=true;

        function pulse(){

            if(increase){

                scale+=0.002;

                if(scale>=1.08){

                    increase=false;

                }

            }else{

                scale-=0.002;

                if(scale<=1){

                    increase=true;

                }

            }

            aiCore.style.transform=`scale(${scale})`;

            requestAnimationFrame(pulse);

        }

        pulse();

    }

    /* =====================================
       ENGINE FLOAT
    ===================================== */

    const engine=document.querySelector(".engine");

    if(engine){

        let angle=0;

        function floatEngine(){

            angle+=0.01;

            engine.style.transform=`translateY(${Math.sin(angle)*6}px)`;

            requestAnimationFrame(floatEngine);

        }

        floatEngine();

    }

    /* =====================================
       STEP HOVER
    ===================================== */

    workflowCards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-15px) scale(1.04)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0) scale(1)";

        });

    });

    /* =====================================
       ICON ROTATION
    ===================================== */

    const icons=document.querySelectorAll(".step-icon");

    icons.forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.style.transform="rotate(360deg) scale(1.2)";
            icon.style.transition=".7s";

        });

        icon.addEventListener("mouseleave",()=>{

            icon.style.transform="rotate(0deg) scale(1)";

        });

    });

    /* =====================================
       DATA FLOW EFFECT
    ===================================== */

    const arrows=document.querySelectorAll(".workflow-arrow");

    setInterval(()=>{

        arrows.forEach((arrow,index)=>{

            setTimeout(()=>{

                arrow.style.color="#00D4FF";
                arrow.style.transform="scale(1.3)";

                setTimeout(()=>{

                    arrow.style.color="#5B7CFF";
                    arrow.style.transform="scale(1)";

                },400);

            },index*300);

        });

    },2500);

});
const text = "Into Content Opportunities";

const typing = document.getElementById("typing");

let index = 0;

function type() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(type, 80);

    }

}

type();