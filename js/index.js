const container = document.querySelector(".div-container")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".previous")
const catalogueItem = document.querySelector("#catalogue-item-container")
const catalogueItems = document.querySelectorAll(".catalogue-item")
let currentIndex = 0;


// catalogue section reveal on scroll code start

window.addEventListener("scroll", () => {
    if ((catalogueItem.offsetTop - 300) < window.scrollY) {
      for (let i = 0; i < catalogueItems.length; i++) {
        catalogueItems[i].classList.add("catalogue-item-animate")
        console.log("good");
        console.log(catalogueItem.offsetTop);
        console.log(window.scrollY);
      }
      // console.log(catalogueItem[i].offsetTop);
    }
    else {
      for (let i = 0; i < catalogueItems.length; i++) {
        catalogueItems[i].classList.remove("catalogue-item-animate")
        console.log("bad");
      }
    }
})



// catalogue section reveal on scroll code end

// Review section code start
const nextSlide = (inc) => {
  const slides = document.getElementsByClassName("slide")
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  currentIndex=(currentIndex+slides.length+inc)%slides.length;
  slides[currentIndex].style.display = "block"
}

nextSlide(0)

nextBtn.addEventListener("click", () => {
  nextSlide(1)
})

prevBtn.addEventListener("click", () => {
  nextSlide(-1)
})
setInterval(function() {
    nextBtn.click()
  }, 5000);

//  Review code end