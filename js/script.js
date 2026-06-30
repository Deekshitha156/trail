/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

setInterval(createHeart,300);

/* ==========================
   SPARKLES FOLLOW CURSOR
========================== */

document.addEventListener(
"mousemove",
(e)=>{

    const sparkle =
    document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
    e.pageX + "px";

    sparkle.style.top =
    e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },1000);
});

/* ==========================
   RELATIONSHIP COUNTER
========================== */

function updateCounter(){

const startDate =
new Date("2020-09-01");

const now =
new Date();

let diff =
now - startDate;

let days =
Math.floor(diff/(1000*60*60*24));

let years =
Math.floor(days/365);

let months =
Math.floor(
(days%365)/30
);

let remainingDays =
(days%365)%30;

if(document.getElementById("years"))
document.getElementById("years").innerText = years;

if(document.getElementById("months"))
document.getElementById("months").innerText = months;

if(document.getElementById("days"))
document.getElementById("days").innerText = remainingDays;
}

setInterval(updateCounter,1000);
updateCounter();

/* ==========================
   MUSIC
========================== */

function toggleMusic(){

const music =
document.getElementById("bgMusic");

if(!music) return;

if(music.paused){
music.play();
}
else{
music.pause();
}
}

/* ==========================
   GIFT BOX
========================== */

function openGift(){

const surprise =
document.getElementById("surprise");

if(surprise){
surprise.classList.remove("hidden");
}

}

/* ==========================
   FADE ANIMATION
========================== */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform=
"translateY(0px)";

}

});

});

document.addEventListener(
"DOMContentLoaded",
()=>{

const elements =
document.querySelectorAll(
".timeline-item,.reason-card,.gallery img"
);

elements.forEach(el=>{

el.style.opacity=0;
el.style.transform=
"translateY(50px)";
el.style.transition=
"all .8s ease";

observer.observe(el);

});

});
/* ==========================
   MEMORY REVEAL GALLERY
========================== */

let currentMemory = 0;

function loadMemory(){

if(typeof memories === "undefined") return;

document.getElementById("memoryImage").src =
memories[currentMemory].image;

document.getElementById("memoryCaption").innerHTML =
memories[currentMemory].caption;

document.getElementById("memoryNumber").innerHTML =
currentMemory + 1;

const progress =
((currentMemory + 1) / memories.length) * 100;

document.getElementById("progressFill").style.width =
progress + "%";

}

function nextMemory(){

if(currentMemory < memories.length - 1){

currentMemory++;
loadMemory();

}
else{

document
.getElementById("finalMessage")
.classList.remove("hidden");

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}

}

function previousMemory(){

if(currentMemory > 0){

currentMemory--;

loadMemory();

}

}

document.addEventListener(
"DOMContentLoaded",
loadMemory
);

let currentMemory = 0;

function openEnvelope(){

document
.getElementById("envelope")
.classList.add("hidden");

document
.getElementById("memoryContent")
.classList.remove("hidden");

loadMemory();

}

function loadMemory(){

document
.getElementById("memoryImage")
.src =
memories[currentMemory].image;

document
.getElementById("memoryCaption")
.innerHTML =
memories[currentMemory].caption;

document
.getElementById("memoryNo")
.innerHTML =
currentMemory + 1;

}

function nextMemory(){

currentMemory++;

if(currentMemory >= memories.length){

document
.getElementById("memoryContent")
.innerHTML = `

<h2>
🎉 You Unlocked My Heart ❤️
</h2>

<p style="font-size:1.3rem">

53 memories...<br>
Countless smiles...<br>
One favorite person.

<br><br>

Happy Birthday Akash ❤️

</p>

<a href="letter.html">
<button class="btn">
Open Birthday Letter 💌
</button>
</a>
`;

return;

}

loadMemory();

}

document
.getElementById("envelope")
.addEventListener(
"click",
openEnvelope
);