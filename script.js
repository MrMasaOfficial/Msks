const startDate = new Date("2025-06-27T02:30:00");

function updateCounter() {
    const now = new Date();
    let diff = now - startDate;

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);

    days %= 30;
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("time").innerHTML =
        `${months} شهر ❤️ ${days} يوم ❤️ ${hours} ساعة ❤️ ${minutes} دقيقة ❤️ ${seconds} ثانية`;
}

setInterval(updateCounter, 1000);
updateCounter();