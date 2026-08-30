document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".banner-slide");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 3000); // change slide every 3 seconds
});

// WHALE SECTION SLIDESHOW
let whaleImages = [
    "Img-s/w1.avif",
    "Img-s/w2.avif",
    "Img-s/w3.jpg",
    "Img-s/mauritius whale sighting.jpeg"
];

let whaleIndex = 0;

setInterval(() => {
    whaleIndex = (whaleIndex + 1) % whaleImages.length;
    document.querySelector(".whale-section").style.backgroundImage =
        `url('${whaleImages[whaleIndex]}')`;
}, 2000); // changes every 2 seconds


document.getElementById("tripForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let destination = document.getElementById("destination").value;
    let travellers = parseInt(document.getElementById("travellers").value);
    let days = parseInt(document.getElementById("days").value);
    let style = document.getElementById("style").value;

    let baseCost = {
    "Bali": 163.33,   // updated for exact $2450
    "Maldives": 250,
    "Europe": 200,
    "Amazon": 180,
    "Mauritius": 170
};

let multiplier = {
    "budget": 1,
    "standard": 1.5,
    "luxury": 2.2
};

    let total = travellers * days * baseCost[destination] * multiplier[style];

    document.getElementById("result").innerHTML =
        `Estimated cost for ${travellers} travellers to ${destination} for ${days} days: $${total.toFixed(2)} – ${style.charAt(0).toUpperCase() + style.slice(1)} Travel Package.`;
});
