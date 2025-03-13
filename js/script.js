// DOM Manipulation for Name Replacement
document.addEventListener('DOMContentLoaded', function () {
    function replaceName() {
        let name = prompt('Masukkan nama anda:', '');
        document.getElementById('name').innerHTML = name;
    }

    let tombol = document.getElementById('tombol');
    tombol.addEventListener('click', replaceName);
});

// Carousel Logic
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelectorAll('.carousel-slide');
    let currentCarousel = 0;

    function showNextCarousel() {
        currentCarousel++;
        if (currentCarousel >= carousel.length) {
            currentCarousel = 0;
        }

        const transformNew = -currentCarousel * 100;
        document.querySelector('.carousel-img').style.transform = `translateX(${transformNew}%)`;
    }

    setInterval(showNextCarousel, 3000);
});

// Form Validation and Result Display
function validateForm() {
    const name = document.getElementById('input-name').value;
    const dob = document.getElementById('dob').value;
    const message = document.getElementById('message').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validasi input
    if (name === "" || dob === "" || message === "" || !gender) {
        alert("All fields must be filled out.");
        return false;
    }

    // Menampilkan hasil input setelah form disubmit
    const resultName = document.getElementById('result-name');
    const resultDob = document.getElementById('result-dob');
    const resultGender = document.getElementById('result-gender');
    const resultMessage = document.getElementById('result-message');
    const currentTime = document.getElementById('current-time');

    // Menampilkan hasil
    resultName.textContent = name;
    resultDob.textContent = dob;
    resultGender.textContent = gender.value;
    resultMessage.textContent = message;

    // Menampilkan waktu saat ini
    const now = new Date();
    currentTime.textContent = now.toString();

    // Mencegah form untuk disubmit ke server
    return false;
}
