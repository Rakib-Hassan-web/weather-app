let h2 = document.querySelector('h2')
let input = document.querySelector('input')
let button = document.querySelector('button')



let temp = document.querySelector('.temp')


let cardHED = document.querySelector('.cardHED')
let resulttt = document.querySelector('.resulttt')
// let h2 = document.querySelector('h2')




let handlebutton = () => {



    if (input.value == '') {
        h2.innerHTML = "hoit betta"
    } else {


        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=2&appid=f921b0d5d82c2356163bcab823b1b23f`)

            .then(res => res.json())
            .then((data)=>{
               


       let myarrray=       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=f921b0d5d82c2356163bcab823b1b23f`)

.then( res => res.json())
.then((data)=>{







let xxx=Math.floor(data.main.temp - 273)
temp.innerHTML=xxx +"°C";


cardHED.innerHTML=input.value




     console.log(data.main.temp - 273.15 )
})






            })


    }







}

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // যদি ঘন্টা, মিনিট বা সেকেন্ড এক সংখ্যার হয় (০-৯), তাহলে তার আগে '0' বসাই
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerHTML = timeString;
}

// প্রতি ১ সেকেন্ড (1000 milliseconds) পরপর updateClock() চালাও
setInterval(updateClock, 1000);

// প্রথমবার চালাও যাতে দেরি না হয়
updateClock();