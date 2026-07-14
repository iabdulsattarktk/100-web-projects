// ===== MOBILE MENU TOGGLE =====

const menuBtn = document.getElementById('menuBtn');
// document.getElementById = HTML mein se us element ko pakad raha hai jiska id="menuBtn" hai
// yeh wahi hamburger button hai jo humne HTML mein banaya tha

const mobileMenu = document.getElementById('mobileMenu');
// usi tarah mobileMenu div ko pakad raha hai jiska id="mobileMenu" hai
// yeh woh dropdown hai jo mobile par kholna band karna hai

let isMenuOpen = false;
// yeh ek variable hai jo track karta hai ke menu abhi khula hai ya band
// false = band, true = khula — shuru mein band hai

menuBtn.addEventListener('click', function() {
// menuBtn par click hone par yeh function chale ga
// addEventListener = "sun, jab click ho tab yeh kaam kar"

  if (isMenuOpen === false) {
  // agar menu abhi band hai

    mobileMenu.classList.remove('hidden');
    // hidden class hata do — matlab menu dikha do
    // classList.remove = kisi element ki koi class hatana

    isMenuOpen = true;
    // ab variable update karo — menu khul gaya

  } else {
  // agar menu pehle se khula hua hai

    mobileMenu.classList.add('hidden');
    // hidden class wapis laga do — menu chupa do
    // classList.add = kisi element mein nayi class lagana

    isMenuOpen = false;
    // variable update karo — menu band ho gaya

  }

});
// addEventListener ka closing bracket

// ===== MOBILE MENU CLOSE (jab koi link click ho) =====

function closeMobileMenu() {
// yeh function humne HTML mein links ke onclick mein call kiya tha
// jab koi nav link click kare to yeh function chale ga

  mobileMenu.classList.add('hidden');
  // menu ko hidden kar do

  isMenuOpen = false;
  // variable bhi reset kar do — menu band hai

}
// function ka closing bracket

// ===== NAVBAR SCROLL EFFECT =====

const navbar = document.querySelector('nav');
// document.querySelector = HTML mein se pehla nav element pakad raha hai
// yeh wahi top wali navbar hai

window.addEventListener('scroll', function() {
// window = poora browser, scroll = jab user page scroll kare
// yeh function har baar chale ga jab page scroll ho

  if (window.scrollY > 50) {
  // window.scrollY = user ne kitne pixels neeche scroll kiya hai
  // agar 50 pixels se zyada scroll ho gaya

    navbar.classList.add('shadow-lg', 'shadow-indigo-500/10');
    // navbar ko thoda shadow do — scroll par navbar alag dikhegi

  } else {
  // agar 50 pixels se kam scroll hai yaani bilkul upar hain

    navbar.classList.remove('shadow-lg', 'shadow-indigo-500/10');
    // shadow hata do — wapis normal

  }

});
// scroll addEventListener ka closing bracket

// ===== SMOOTH REVEAL ANIMATION =====

const observer = new IntersectionObserver(function(entries) {
// IntersectionObserver = yeh dekhta hai koi element screen par aaya ya nahi
// jab element screen par aaye to yeh function chale ga

  entries.forEach(function(entry) {
  // entries = woh saari cheezein jo observe ho rahi hain
  // forEach = har ek entry ke liye yeh kaam karo

    if (entry.isIntersecting) {
    // isIntersecting = kya yeh element abhi screen par dikh raha hai?

      entry.target.classList.add('opacity-100', 'translate-y-0');
      // element ko visible karo aur apni jagah par le aao

      entry.target.classList.remove('opacity-0', 'translate-y-8');
      // pehli wali hidden state hatao

    }

  });

}, { threshold: 0.1 });
// threshold: 0.1 = jab element ka 10% screen par aaye tab trigger karo

const animatedElements = document.querySelectorAll('section');
// poore page ke saare section elements pakad lo

animatedElements.forEach(function(el) {
// har section ke liye yeh kaam karo

  el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
  // pehle section ko invisible aur thoda neeche karo
  // transition-all duration-700 = 700ms mein smoothly animate hoga

  observer.observe(el);
  // observer ko bol do ke is element ko observe karo

});
// forEach ka closing bracket