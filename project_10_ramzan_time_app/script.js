// step 1: HTML se elements pakad rahe hain, taake JS unhe control kar sake

const cityInput = document.getElementById("cityInput");
// input box jahan user city likhta hai

const searchBtn = document.getElementById("searchBtn");
// "Get Timing" button

const sehriTimeEl = document.getElementById("sehriTime");
// Sehri card ke andar wala <p> jahan time dikhega

const iftarTimeEl = document.getElementById("iftarTime");
// Iftar card ke andar wala <p> jahan time dikhega

const messageEl = document.getElementById("message");
// loading/error message dikhane wala <p>

// step 2: button par click event laga rahe hain

searchBtn.addEventListener("click", function () {
  // jab bhi button click ho, yeh function chalega

  const city = cityInput.value.trim();
  // input box ki value nikali, trim() se aage peeche ki khaali spaces hata di

  if (city === "") {
    // agar city khaali hai
    messageEl.textContent = "Please enter a city name";
    // message dikhaya
    return;
    // function yahin rok diya, aage code nahi chalega
  }

  messageEl.textContent = "Loading...";
  // API call hone tak yeh dikhega

  getPrayerTimes(city);
  // ek alag function call kiya, city ka naam de kar
});

// step 3: API se data lane wala function

function getPrayerTimes(city) {
  // yeh function city ka naam leta hai aur API call karta hai

  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Pakistan&method=1`;
  // API ka URL bana rahe hain
  // city = user ka diya hua naam
  // country = Pakistan (fix rakha hai, kyunki app Pakistan ke liye hai)
  // method=1 = calculation method (University of Islamic Sciences, Karachi)

  fetch(url)
    // fetch() browser ko batata hai: is URL par jao aur data lao
    .then(function (response) {
      // jab response wapas aaye (lekin abhi raw form mein hai)
      return response.json();
      // response ko JSON (JavaScript object) mein convert kar rahe hain
    })
    .then(function (data) {
      // ab humare paas asal data hai, JSON object ki form mein

      if (data.code === 200) {
        // agar API ne successfully data diya (code 200 = success)

        const timings = data.data.timings;
        // timings object nikala, jisme Fajr, Maghrib, etc. hain

        const sehriTime = timings.Fajr;
        // Sehri ka time = Fajr time (Fajr shuru hote hi Sehri khatam hoti hai)

        const iftarTime = timings.Maghrib;
        // Iftar ka time = Maghrib time

        sehriTimeEl.textContent = sehriTime;
        // Sehri card mein time daal diya

        iftarTimeEl.textContent = iftarTime;
        // Iftar card mein time daal diya

        messageEl.textContent = "";
        // loading message hata diya, kyunki data mil gaya
      } else {
        // agar API ne error diya (jaise city galat)
        messageEl.textContent = "City not found. Try again.";
      }
    })
    .catch(function (error) {
      // agar fetch hi fail ho gaya (jaise internet nahi hai)
      messageEl.textContent = "Something went wrong. Check your internet.";
      console.log(error);
      // error console mein bhi dikha diya, debugging ke liye
    });
}
