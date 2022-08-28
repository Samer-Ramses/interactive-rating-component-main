let li = document.querySelectorAll("li");
li.forEach((ele) => {
    ele.addEventListener("click", () => {
        li.forEach((element) => {
            element.classList.remove("active");
        })
        ele.classList.toggle("active");
    })
})
document.getElementById("submit").addEventListener("click", () => {
    let active = document.querySelector(".active");
    let thank = document.querySelector("div.thank");
    let rating = document.querySelector("div.rating");
    let span = document.querySelector("span");
    if(active !== null){
        span.textContent = active.textContent;
        thank.style.display = "block";
        rating.style.display = "none";
    }
})