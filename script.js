// PASSWORD SYSTEM
let tries = 0;

document.getElementById("unlockBtn").onclick = function () {
    const pass = document.getElementById("password").value.trim();
    const msg = document.getElementById("errorMsg");

    if (pass === "27/6") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("siteContent").classList.remove("hidden");
        document.getElementById("music").play();
    } else {
        tries++;
        if (tries === 1) msg.innerText = "جرا اي يا سالي 😅";
        else if (tries === 2) msg.innerText = "الله نسيتي التاريخ 😭";
        else msg.innerText = "شكلك مش البت سالي مراتي 😳";
    }
};

// TIMER
const startDate = new Date("2025-06-27T02:30:00");

setInterval(() => {
    const now = new Date();
    let diff = now - startDate;

    let s = Math.floor(diff / 1000) % 60;
    let m = Math.floor(diff / 60000) % 60;
    let h = Math.floor(diff / 3600000) % 24;
    let d = Math.floor(diff / 86400000) % 30;
    let mo = Math.floor(diff / 2592000000);

    document.getElementById("time").innerText =
        `${mo} Months • ${d} Days • ${h} Hours • ${m} Minutes • ${s} Seconds`;
}, 1000);

// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark");
}
