let h2 = document.querySelector('h2')
let input = document.querySelector('input')
let button = document.querySelector('button')



let temp = document.querySelector('.temp')


let cardHED = document.querySelector('.cardHED')
let resulttt = document.querySelector('.resulttt')
let chngCalcious = document.querySelector('.chngCalcious')
let scalee = document.querySelector('.scalee')




let handlebutton = () => {

    if (input.value == '') {
        h2.innerHTML = "hoit betta"
    } else {

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=2&appid=f921b0d5d82c2356163bcab823b1b23f`)

            .then(res => res.json())
            .then((data) => {

                let myarrray = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=f921b0d5d82c2356163bcab823b1b23f`)

                    .then(res => res.json())
                    .then((data) => {

                        let result = Math.floor(data.main.temp - 273)
                        temp.innerHTML = result + "°C";

                        cardHED.innerHTML = input.value
                        console.log(data.main.temp - 273.15)
                    })
            })
    }

}


// let calcious= ()=>{
//     let new=document.createElement('button')

//     scalee.appendChild(new)


// scalee.classList.toggle('changgee')


// if( scalee.classList[1] =="changgee" ){
//     chngCalcious.innerHTML='celsius'
// }

// }
