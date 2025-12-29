// PASSWORD
let tries = 0;
function checkPassword(){
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if(pass === "27/6"){
        document.getElementById("lockScreen").style.display="none";
        document.getElementById("siteContent").style.display="block";
        document.getElementById("music").play();
    } else {
        tries++;
        if(tries===1) error.innerText="جرا اي يا سالي 😅";
        else if(tries===2) error.innerText="الله نسيتي التاريخ 😭";
        else error.innerText="شكلك مش البت سالي مراتي 😳";
    }
}

// TIMER
const startDate = new Date("2025-06-27T02:30:00");
setInterval(()=>{
    let d=new Date()-startDate;
    let s=Math.floor(d/1000)%60;
    let m=Math.floor(d/60000)%60;
    let h=Math.floor(d/3600000)%24;
    let days=Math.floor(d/86400000)%30;
    let months=Math.floor(d/2592000000);
    document.getElementById("time").innerText=
    `${months} Months • ${days} Days • ${h} Hours • ${m} Minutes • ${s} Seconds`;
},1000);

// DARK MODE
function toggleDark(){
    document.body.classList.toggle("dark");
}

// HEARTS
document.addEventListener("click",(e)=>{
    let heart=document.createElement("div");
    heart.innerText="💗";
    heart.style.position="absolute";
    heart.style.left=e.pageX+"px";
    heart.style.top=e.pageY+"px";
    heart.style.fontSize="24px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),1000);
});
