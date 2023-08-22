// console.log(window.document);
// let pText = window.document.getElementsByTagName('p')
// // console.log(pText);
// // let text = document.getElementsByClassName('text')
// // let idtext = document.getElementById('text')
// let textP = document.querySelectorAll('.text')
// // // let textPa = document.querySelectorAll('.text')

// // // pText[0].innerHTML = 'Hello world'

// // // console.log(pText);

// for(let i=0; i<5; i++){
//     textP[i].style.color = 'blue'
// }

// textP.style.color = 'blue'

// let textPP = document.querySelector('.text3')

// textPP.style.color = 'black'

// let textPP = document.querySelectorAll('.text')

// for(let i=0; i<textPP.length; i++){
//     textPP[i].style.color = 'blue'
// }

// textPP.style.color = 'blue'

// let body = document.querySelector('body')
// let element = document.createElement('h1')
// body.prepend(element)
// element.style.cssText =  `
// color: red;
// background-color: black
// `
// element.innerHTML = 'hello world'
// console.log(element);

// let date = new Date;


// switch (date.getDay()) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("shanba");
//         break;
//     case 7:
//         console.log("yakshanba");
//         break;
//     default:
//         break;



// console.log(date.getFullYear());

// console.log(date.getHours());

// console.log(date.getMilliseconds());

// console.log(date.getMinutes());

// console.log(date.getMonth());

// setInterval(() => {

// }, interval);

// setTimeout(() => {

// }, timeout);

// let body = document.querySelector("body")
// let a = document.createElement("a")
// let img = document.createElement("img")



// body.prepend(a)
// a.prepend(img)
// a.setAttribute('href', "https://space.marsit.uz/main#active-course")
// img.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc47eUqARvHLACKC_rAEYWOihJrrE_TM8t33zDqFIw&s")

// let body = document.querySelector("body")
// let inpuText = document.querySelector("input")
// let button = document.querySelector(".btn")
// let h1 = document.querySelector("h1")


// button.addEventListener("click", (e)=> {
//     h1.innerTEXT = "sasas"
// })

// document.addEventListener("keydown", (e)=> {
//     if(e.key ==="w"){
//         alert("hello")
//     }
//     console.log(e.key);
// })

// button.addEventListener("click", (e)=> {
//     h1.innerText = inpuText.value
// })

// let minus = document.querySelector(".minus")
// let plus = document.querySelector(".plus")
// let input = document.querySelector(".text")
// let one = document.querySelector(".one")
// let two = document.querySelector(".two")
// let three = document.querySelector(".three")
// let four = document.querySelector(".four")
// let fiwe = document.querySelector(".fiwe")
// let counter = 0

// one.addEventListener("click", ()=>{
//     text.innerHTML = ++counter*1
// })
// two.addEventListener("click", ()=>{
//     text.innerHTML = ++counter*2
// })
// three.addEventListener("click", ()=>{
//     text.innerHTML = ++counter*3
// })
// four.addEventListener("click", ()=>{
//     text.innerHTML = ++counter*4
// })
// fiwe.addEventListener("click", ()=>{
//     text.innerHTML = ++counter*5
// })

// minus.addEventListener("click", ()=>{
//     score.innerHTML = --counter*5
// })

// let button = document.querySelector(".btn")
// let windov = document.querySelector(".window")

// button.addEventListener("click", ()=>{
//     windov.classList.toggle("show")
// })


let randomTextColor = document.querySelector(".color")
let score = document.querySelector(".span");
let start = document.querySelector(".start")
let arrowColors = ["red", "green", "yellow", "blue"]

let buttons = document.querySelectorAll(".button")
let counter = 0

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function colorButtons(e) {

        let colors = window.getComputedStyle(e.target).backgroundColor

        if(colors === "rgb(255, 0, 0)") {
            if(randomTextColor.innerHTML === "red") {
                counter++
                score.innerHTML = counter
                randomButtonColor()
            }else{
                counter--
                score.innerHTML = counter
                randomButtonColor()
            }
        }else if(colors === "rgb(0, 128, 0)") {
            if(randomTextColor.innerHTML === "green") {
                counter++
                score.innerHTML = counter
                randomButtonColor()
            }else{
                counter--
                score.innerHTML = counter
                randomButtonColor()
            }
        }else if(colors === "rgb(0, 0, 255)") {
            if(randomTextColor.innerHTML === "blue") {
                counter++
                score.innerHTML = counter
                randomButtonColor()
            }else{
                counter--
                score.innerHTML = counter
                randomButtonColor()
            }
        }else if(colors === "rgb(255, 255, 0)") {
            if(randomTextColor.innerHTML === "yellow") {
                counter++
                score.innerHTML = counter
                randomButtonColor()
            }else{
                counter--
                score.innerHTML = counter
                randomButtonColor()
            }    

        }    

    })

    
}
function randomButtonColor(){
    let random = Math.floor(Math.random() * arrowColors.length)
    randomTextColor.innerHTML = arrowColors[random]
}

start.addEventListener("click", function startGame() {
    randomButtonColor()
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false
    }
})




        // switch (buttons[i]) {
        //     case value:
        //         score.innerHTML = ++counter
        //         randomButtonColor()
        //         break;
        
        //     default:
        //         score.innerHTML = --counter

        //         break;
        // }

        