const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeLetter");
const letterScene = document.getElementById("letterScene");

openBtn.onclick = () => letterScene.classList.add("show");
closeBtn.onclick = () => letterScene.classList.remove("show");

/* PAGE LOGIC — FIXED */
const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");

let index = 0;

nextBtn.onclick = () => {
  if (index < pages.length - 1) {
    pages[index].classList.add("next-flip");
    pages[index].classList.remove("active");
    index++;
    pages[index].classList.add("active");
  }
};

prevBtn.onclick = () => {
  if (index > 0) {
    pages[index - 1].classList.remove("next-flip");
    pages[index - 1].classList.remove("flipped");

    pages[index].classList.remove("active");
    index--;
    pages[index].classList.add("active");
  }
};
