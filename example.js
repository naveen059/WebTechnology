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







