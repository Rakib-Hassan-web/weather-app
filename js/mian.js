let h2 = document.querySelector('h2')
let input = document.querySelector('input')
let button = document.querySelector('button')



let temp = document.querySelector('temp')


let cardheader = document.querySelector('card-header')
let resulttt = document.querySelector('resulttt')
// let h2 = document.querySelector('h2')




let handlebutton = () => {



    if (input.value == '') {
        h2.innerHTML = "hoit betta"
    } else {


        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=2&appid=f921b0d5d82c2356163bcab823b1b23f`)

            .then(res => res.json())
            .then((data)=>{
               


              fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=f921b0d5d82c2356163bcab823b1b23f`)

.then( res => res.json())
.then((data)=>{
     console.log(data.main.temp - 273.15 )
})






            })


    }







}