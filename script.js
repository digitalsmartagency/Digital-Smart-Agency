function startCountdown() {
    const launchDate = new Date("March 30, 2025 00:00:00").getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "We're Live!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

window.onload = startCountdown;
