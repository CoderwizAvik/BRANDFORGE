/* ==========================================
   BuildForge AI Content Generator
   aicontent.js
   Part 1
========================================== */

// ==========================================
// Elements
// ==========================================

const topic = document.getElementById("topic");
const platform = document.getElementById("platform");
const tone = document.getElementById("tone");
const length = document.getElementById("length");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("result");

const progressBar = document.querySelector(".progress-bar");

const status = document.getElementById("status");

const outputBox = document.querySelector(".output-box");

const steps = document.querySelectorAll(".steps li");

// ==========================================
// AI Templates
// ==========================================

const hooks = [

"🚀 Here's something every creator should know...",
"💡 Let's explore a powerful idea...",
"🔥 This trend is changing everything...",
"✨ The future belongs to those who adapt...",
"📈 Growth starts with one simple strategy..."

];

const endings = [

"\n\nWhat do you think? Share your thoughts below. 👇",

"\n\nFollow BuildForge for more AI-powered insights.",

"\n\nSave this post for future reference.",

"\n\nLet's innovate together! 🚀",

"\n\nTag someone who should read this."

];

const hashtags = [

"\n\n#AI #Technology #Innovation #BuildForge",

"\n\n#ArtificialIntelligence #Future #Tech",

"\n\n#Marketing #Creator #Content #AI",

"\n\n#Startup #Productivity #BuildForge"

];

// ==========================================
// Generate AI Content
// ==========================================

function createContent(){

    const userTopic = topic.value.trim();

    if(userTopic===""){

        alert("Please enter a topic.");

        return;

    }

    const intro =
        hooks[Math.floor(Math.random()*hooks.length)];

    const ending =
        endings[Math.floor(Math.random()*endings.length)];

    const tag =
        hashtags[Math.floor(Math.random()*hashtags.length)];

    const body =

`${intro}

Topic : ${userTopic}

Platform : ${platform.value}

Tone : ${tone.value}

Length : ${length.value}

Artificial Intelligence is transforming the way professionals create high-quality content.

Instead of spending hours brainstorming ideas, AI helps generate engaging, relevant and personalized content within seconds.

Whether you're building a personal brand, growing your business, or increasing audience engagement, consistency is the key to success.

${ending}

${tag}`;

    startGeneration(body);

}

// ==========================================
// Generate Button
// ==========================================

generateBtn.addEventListener("click", createContent);

// ==========================================
// Clear Button
// ==========================================

clearBtn.addEventListener("click",()=>{

    topic.value="";

    result.innerHTML="Your AI generated content will appear here...";

    status.innerHTML="Ready";

    progressBar.style.width="0%";

    outputBox.classList.remove("loading");

    steps.forEach(step=>{

        step.classList.remove("active");
        step.classList.remove("completed");

    });

});

// ==========================================
// Placeholder
// Part 2 will implement this function
// ==========================================
/* ==========================================
   BuildForge AI Content Generator
   Part 2
========================================== */

function resetSteps() {

    steps.forEach(step => {

        step.classList.remove("active");
        step.classList.remove("completed");

    });

}

function activateStep(index) {

    if (steps[index]) {

        steps[index].classList.add("active");

    }

}

function completeStep(index) {

    if (steps[index]) {

        steps[index].classList.remove("active");

        steps[index].classList.add("completed");

    }

}

/* ==========================================
        Main AI Generation
========================================== */

function startGeneration(text) {

    result.innerHTML = "";

    result.classList.remove("typing");

    outputBox.classList.add("loading");

    resetSteps();

    progressBar.style.transition = "none";

    progressBar.style.width = "0%";

    status.innerHTML = "Analyzing Prompt...";

    setTimeout(() => {

        progressBar.style.transition = "8s linear";

        progressBar.style.width = "100%";

    }, 100);

    /* ------------------------
       Step 1
    ------------------------- */

    activateStep(0);

    setTimeout(() => {

        completeStep(0);

        activateStep(1);

        status.innerHTML = "Finding Keywords...";

    }, 2000);

    /* ------------------------
       Step 2
    ------------------------- */

    setTimeout(() => {

        completeStep(1);

        activateStep(2);

        status.innerHTML = "Generating Content...";

    }, 4000);

    /* ------------------------
       Step 3
    ------------------------- */

    setTimeout(() => {

        completeStep(2);

        activateStep(3);

        status.innerHTML = "Optimizing Quality...";

    }, 6000);

    /* ------------------------
       Final Step
    ------------------------- */

    setTimeout(() => {

        completeStep(3);

        status.innerHTML = "Completed ✓";

        outputBox.classList.remove("loading");

        typeWriter(text);

    }, 8000);

}

/* ==========================================
        Typewriter Effect
========================================== */

function typeWriter(text) {

    result.innerHTML = "";

    result.classList.add("typing");

    let i = 0;

    const speed = 18;

    function typing() {

        if (i < text.length) {

            result.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

        else {

            result.classList.remove("typing");

        }

    }

    typing();

}
/* ==========================================
   BuildForge AI Content Generator
   Part 3
========================================== */

/* ==========================================
        Buttons
========================================== */

const copyBtn = document.getElementById("copyBtn");
const regenBtn = document.getElementById("regenBtn");
const scheduleBtn = document.getElementById("scheduleBtn");

/* ==========================================
        Copy Button
========================================== */

copyBtn.addEventListener("click", async () => {

    if(result.innerText.trim()==="" ||
       result.innerText==="Your AI generated content will appear here..."){

        showToast("Nothing to copy!");

        return;

    }

    try{

        await navigator.clipboard.writeText(result.innerText);

        copyBtn.innerHTML="✅ Copied";

        showToast("Content copied successfully!");

        setTimeout(()=>{

            copyBtn.innerHTML="📋 Copy";

        },2000);

    }

    catch(error){

        showToast("Clipboard access failed.");

    }

});

/* ==========================================
        Regenerate
========================================== */

regenBtn.addEventListener("click",()=>{

    if(topic.value.trim()===""){

        showToast("Enter a topic first.");

        return;

    }

    createContent();

});

/* ==========================================
        Schedule
========================================== */

scheduleBtn.addEventListener("click",()=>{

    showToast("📅 Scheduling feature coming soon!");

});

/* ==========================================
        CTRL + ENTER
========================================== */

topic.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="Enter"){

        createContent();

    }

});

/* ==========================================
        Auto Resize Textarea
========================================== */

topic.addEventListener("input",()=>{

    topic.style.height="auto";

    topic.style.height=topic.scrollHeight+"px";

});

/* ==========================================
        Toast Notification
========================================== */

function showToast(message){

    let toast=document.querySelector(".toast");

    if(!toast){

        toast=document.createElement("div");

        toast.className="toast";

        document.body.appendChild(toast);

    }

    toast.innerHTML=message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}

/* ==========================================
        Welcome Animation
========================================== */

window.addEventListener("load",()=>{

    status.innerHTML="Ready";

});

/* ==========================================
        Button Ripple Effect
========================================== */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const size=Math.max(this.clientWidth,this.clientHeight);

        circle.style.width=size+"px";

        circle.style.height=size+"px";

        circle.style.left=e.offsetX-size/2+"px";

        circle.style.top=e.offsetY-size/2+"px";

        circle.className="ripple";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

/* ==========================================
        Floating Card Animation
========================================== */

const cards=document.querySelectorAll(".feature-card");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{threshold:.25});

cards.forEach(card=>{

    observer.observe(card);

});

/* ==========================================
        Console Message
========================================== */

console.log(
"%cBuildForge AI Content Generator Loaded",
"color:#2C74B3;font-size:18px;font-weight:bold;"
);
