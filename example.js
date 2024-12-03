// document.addEventListener('DOMContentLoaded', ()=>{
//     document.querySelector("button").addEventListener('click', () => {
//         document.querySelector("button").style.background = "green"
        
        
//         let countval = parseInt(document.querySelector(".counter").innerHTML); //<h1 class="counter">0</h1> =>"0" => 0

//         countval++;

//         document.querySelector(".counter").innerHTML = countval;


//         let newBtn = document.querySelector("button").cloneNode(true);


//         document.querySelector("div").appendChild(newBtn);

//     })

//     let newParagraph = document.createElement("p");

//     newParagraph.innerHTML = "New Paragraph";

//     document.querySelector("div").removeChild(document.querySelector("p p"));
// })


// window.onload = () => {

// }

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("button").addEventListener('click', (e) => {

        e.preventDefault();
        document.querySelector("button").textContent = "Clicked";

        let list = document.getElementsByTagName("li");
        for (let ele of list) {
            ele.style.background = "green";
            ele.style.color = "white";
        }
    });

    let sports = document.querySelectorAll("li");
    sports.forEach(sport => {
        sport.addEventListener('mouseover', (event) => {
            event.stopPropagation();
            sport.style.background = "red";
            sport.style.color = "white";

            sport.style.cursor = "pointer";
        });
    });


    
});







