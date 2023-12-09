const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far")
const colors = ["red", "orange", "yellow", "lightgreen", "limegreen"]

updateRating(0)

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
       updateRating(index)
    })
})

function updateRating(index){
    starsEl.forEach((starEl, indx)=>{
        if(indx < index +1){
            starEl.classList.add("active");   
        } else{
            starEl.classList.remove("active");
        }       
    })

    emojisEl.forEach(emojiEl=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colors[index];
    })
}

