// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
// (e): event

// Ketika humberger menu di klik
hamburger.addEventListener('click', function(e) {
    e.preventDefault(); // Cegah scroll ke atas
    navbarNav.classList.toggle('active');
});

// klik di luar sidebar untuk menghilangkan nav nya
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove ('active')
    }
});

// Jika di klik di bagian link nya maka tutup navbar
const navLinks = document.querySelectorAll ('.link-navbar')

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarNav.classList.remove('active');
    });
});

// Wa Form
document.getElementById ('waForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Cegah Reload

    const user = document.getElementById ('userInput').value.trim();
    const email = document.getElementById ('emailInput').value.trim();
    const noTel = document.getElementById ('noTelInput').value.trim();
    
    // Jika form tidak di isi maka alert akan muncul
    if (!user || !email || !noTel) {
        alert ('Harap isi semua form yang wajib diisi');
        return;
    }

    // No Whatsapp Saya
    const phoneNumber = '6282124298599'

    // Gabungkan Pesan
    const text = (`Halo nama saya ${user},email saya ${email},dan no telphone saya adalah ${noTel}`);

    // Encode Pesan Agar Bisa di Baca URL
    const encodedText = encodeURIComponent(text);

    // Buat Link Whatsapp
    const waUrl = (`https://wa.me/${phoneNumber}?text=${encodedText}`);

    // Buka Whatsapp
    window.open(waUrl, '_blank');
});