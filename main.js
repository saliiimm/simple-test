const btn = document.querySelector(".menu");
const items = document.querySelector("ul");
const ligne1 = document.querySelector(".ligne1");
const ligne2 = document.querySelector(".ligne2");
const ligne3 = document.querySelector(".ligne3");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");
const test = document.querySelector(".test");

btn.addEventListener("click", function () {
  items.classList.toggle("active-ligne");
  ligne1.classList.toggle("active-ligne1");
  ligne2.classList.toggle("active-ligne2");
  ligne3.classList.toggle("active-ligne3");
});

document.addEventListener("scroll", function () {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((item) => {
    item.classList.remove("active-section");
    if (item.getAttribute("href") === "#" + current) {
      item.classList.add("active-section");
    }
  });

  console.log(current);
});

test.addEventListener("keydown", (event) => {
  if (event.key === "enter") {
    test.textContent += `${hello}`;
    console.log("ca marche");
  }
});
