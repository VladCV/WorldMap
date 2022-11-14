const
    prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll(".dot");

let index = 0;

//console.log(prev)

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove("active")
    }
    slides[n].classList.add("active")
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove("active")
    }
    dots[n].classList.add("active")
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

// next.addEventListener("click", nextSlide)
// prev.addEventListener("click", prevSlide)


document.getElementById("slider").querySelectorAll(".slide .slide-button").forEach((slideButton) => {
    slideButton.addEventListener("click", function () {
        localStorage.setItem('mode', slideButton.dataset.mode)
        localStorage.setItem('modeId', slideButton.dataset.modeid)
        if (slideButton.dataset.modeid == 0) { 
            document.location.href = "map.html"
            //document.location.href = "map.html?modeid=0";
        } else if (slideButton.dataset.modeid == 1) {
            document.location.href = "map.html?modeid=1";
        } else if (slideButton.dataset.modeid == 2) {
            document.location.href = "map.html?modeid=2";
        } else if (slideButton.dataset.modeid == 3) {
            document.location.href = "map.html?modeid=3";
        }
    })
})