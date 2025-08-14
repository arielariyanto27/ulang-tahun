// ------------------------
// ANIMASI TEKS DENGAN JEJAK PUTIH
// ------------------------
function startTextAnimation() {
    const text = "Raisah Razita Syaziah";
    const container = document.getElementById("glowText");
    container.innerHTML = ""; // biar gak dobel

    text.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        container.appendChild(span);
    });

    const letters = container.querySelectorAll("span");
    let index = 0;
    let timer;

    function glowEffect() {
        // Reset huruf sebelumnya jadi putih
        if (index > 0) {
            letters[index - 1].style.color = "white";
            letters[index - 1].style.textShadow = "0 0 5px white";
        }

        // Huruf aktif jadi pink
        letters[index].style.color = "pink";
        letters[index].style.textShadow = "0 0 10px pink, 0 0 20px pink";

        index++;

        // Kalau sudah sampai huruf terakhir
        if (index >= letters.length) {
            clearInterval(timer);
            showButton();
            setTimeout(() => {
                // Reset semua ke hitam
                letters.forEach((letter) => {
                    letter.style.color = "black";
                    letter.style.textShadow = "none";
                });

                // Ulang animasi lagi
                index = 0;
                timer = setInterval(glowEffect, 150);
            }, 800); // jeda sebelum reset
        }
    }

    timer = setInterval(glowEffect, 150);
}


// ------------------------
// MUNCULKAN TOMBOL
// ------------------------
function showButton() {
    const btn = document.getElementById("nextBtn");
    btn.classList.remove("hidden");
    btn.classList.add("show");
}

// ------------------------
// ANIMASI BINTANG
// ------------------------
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const numStars = 100;
const stars = [];

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2
    });
}

function animateStars() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "white";
    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > h) {
            star.y = 0;
            star.x = Math.random() * w;
        }
    });
    requestAnimationFrame(animateStars);
}
animateStars();

// ------------------------
// OVERLAY FADE OUT
// ------------------------
window.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".overlay");
    setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.style.display = "none", 1000);
        startTextAnimation();
    }, 500);
});
