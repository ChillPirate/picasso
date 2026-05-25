// Podaci o slikama
const sliderData = [
    {
        src: "Femme aux Bras Croisés.jpg",
        title: "Zena sa prekrstenim rukama",
        year: "1902",
        desc: "Zena sa prekrstenim rukama."
    },
    {
        src: "Girl Before a Mirror.jpg",
        title: "Devojka pred ogledalom",
        year: "1932",
        desc: "Devojka pred ogledalom"
    },
    {
        src: "Guernica.jpg",
        title: "Gernika",
        year: "1937",
        desc: "Gernika."
    },
    {
        src: "OldGuitarist.jpg",
        title: "Stari Gitarista",
        year: "1904",
        desc: "Stari covek svira gitaru."
    },
    {
        src: "Yo,_Picasso.jpg",
        title: "Ja, Pikaso",
        year: "1901",
        desc: "Autoportret Pabla Pikasa"
    }
];

let currentIndex = 0;

function initSlider() {
    const dotContainer = document.getElementById('dot-indicators');
    
    // Kreiranje indikatora na osnovu broja slika
    sliderData.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotContainer.appendChild(dot);
    });

    updateSlider();
    // Interval na 3000ms
    setInterval(nextSlide, 3000);
}

function updateSlider() {
    const imgElement = document.getElementById('slider-image');
    const titleElement = document.getElementById('info-title');
    const yearElement = document.getElementById('info-year');
    const descElement = document.getElementById('info-desc');
    const dots = document.querySelectorAll('.dot');

    const currentData = sliderData[currentIndex];

    // Resetovanje animacije: sklonimo klasu pa je dodamo opet
    imgElement.classList.remove('fade-in');
    void imgElement.offsetWidth; // Trikovi za "trigger" reflow-a
    imgElement.classList.add('fade-in');

    // Postavljanje podataka
    imgElement.src = currentData.src;
    titleElement.innerText = currentData.title;
    yearElement.innerText = currentData.year;
    descElement.innerText = currentData.desc;

    // Ažuriranje indikatora
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= sliderData.length) {
        currentIndex = 0; // Povratak na prvu sliku
    }
    updateSlider();
}

// Pokretanje čim se stranica učita
window.onload = initSlider;