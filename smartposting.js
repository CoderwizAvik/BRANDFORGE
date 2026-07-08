/*==================================================
    BuildForge AI - Smart Posting Reminder
    File : smartposting.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    animateCounters();

    animateTimeline();

    notificationPopup();

    floatingAI();

    reminderButton();

    settingsToggle();

});

/*====================================
        Counter Animation
=====================================*/

function animateCounters(){

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const targetText = counter.innerText;

        if(targetText.includes("%")){

            let target = parseInt(targetText);

            let count = 0;

            counter.innerText = "0%";

            let speed = Math.ceil(target/80);

            let interval = setInterval(()=>{

                count += speed;

                if(count >= target){

                    counter.innerText = target + "%";

                    clearInterval(interval);

                }else{

                    counter.innerText = count + "%";

                }

            },20);

        }

        else{

            let target = parseInt(targetText);

            let count = 0;

            counter.innerText = "0";

            let speed = Math.ceil(target/80);

            let interval = setInterval(()=>{

                count += speed;

                if(count >= target){

                    counter.innerText = target;

                    clearInterval(interval);

                }else{

                    counter.innerText = count;

                }

            },20);

        }

    });

}

/*====================================
        Timeline Animation
=====================================*/

function animateTimeline(){

    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item,index)=>{

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        setTimeout(()=>{

            item.style.transition = ".7s";

            item.style.opacity = "1";

            item.style.transform = "translateY(0px)";

        },index*250);

    });

}

/*====================================
      Notification Popup
=====================================*/

function notificationPopup(){

    const notify = document.querySelector(".notification");

    if(!notify) return;

    notify.style.opacity = "0";

    notify.style.transform = "translateX(100px)";

    setTimeout(()=>{

        notify.style.transition=".8s";

        notify.style.opacity="1";

        notify.style.transform="translateX(0px)";

    },1200);

}

/*====================================
      Floating AI Assistant
=====================================*/

function floatingAI(){

    const ai=document.querySelector(".floating-ai");

    if(!ai) return;

    ai.addEventListener("click",()=>{

        alert("🤖 BuildForge AI Assistant\n\nYour next reminder is scheduled for 6:30 PM.");

    });

}

/*====================================
        Enable Reminder Button
=====================================*/

function reminderButton(){

    const btn=document.querySelector(".primary-btn");

    if(!btn) return;

    btn.addEventListener("click",()=>{

        btn.innerHTML="✅ Reminder Enabled";

        btn.style.background="linear-gradient(135deg,#2ecc71,#27ae60)";

    });

}

/*====================================
        Toggle Switches
=====================================*/

function settingsToggle(){

    const toggles=document.querySelectorAll(".switch input");

    toggles.forEach(toggle=>{

        toggle.addEventListener("change",()=>{

            if(toggle.checked){

                console.log("Reminder Enabled");

            }

            else{

                console.log("Reminder Disabled");

            }

        });

    });

}

/*====================================
        Live Clock
=====================================*/

function updateClock(){

    const clock=document.getElementById("liveTime");

    if(!clock) return;

    const now=new Date();

    clock.innerHTML=now.toLocaleTimeString();

}

setInterval(updateClock,1000);

/*====================================
      Progress Circle Animation
=====================================*/

window.addEventListener("load",()=>{

    const circle=document.querySelector(".progress-circle");

    if(!circle) return;

    let progress=0;

    const target=96;

    let interval=setInterval(()=>{

        progress++;

        circle.style.background=
        `conic-gradient(
            #2C74B3 ${progress}%,
            rgba(255,255,255,.08) ${progress}%
        )`;

        if(progress>=target){

            clearInterval(interval);

        }

    },25);

});

/*====================================
      Reminder Countdown
=====================================*/

const postButton=document.querySelector(".post-btn");

if(postButton){

    postButton.addEventListener("click",()=>{

        postButton.innerHTML="🚀 Posted";

        postButton.style.background="linear-gradient(135deg,#2ecc71,#27ae60)";

    });

}

/*====================================
      Card Hover Animation
=====================================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

/*====================================
      Analytics Auto Refresh
=====================================*/

setInterval(()=>{

    const values=document.querySelectorAll(".counter");

    values.forEach(value=>{

        if(value.innerText.includes("%")) return;

        let number=parseInt(value.innerText);

        number+=Math.floor(Math.random()*2);

        value.innerText=number;

    });

},12000);

/*====================================
        Smooth Fade on Load
=====================================*/

window.onload=()=>{

    document.body.style.opacity="0";

    document.body.style.transition="1s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

};

/*====================================
        Console Message
=====================================*/

console.log("%cBuildForge AI Loaded Successfully",
"color:#2C74B3;font-size:18px;font-weight:bold;");