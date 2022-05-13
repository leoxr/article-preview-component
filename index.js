const btnShare = document.getElementById("btn-share");
const active = document.getElementById("active");
const btnShareActive = document.getElementById("btn-share-active");
const container = document.getElementById("idContainer");

btnShare.addEventListener("click", (e) => {
  e.preventDefault();

  if(!active.classList.contains('animation-in')) {
    active.classList.add("animation-in");
    active.classList.remove("animation-out");
  } else {
    active.classList.remove("animation-in");
    active.classList.add("animation-out");
  }

});

btnShareActive.addEventListener("click", (e) => {
  e.preventDefault();
  active.classList.toggle("animation-in");
  active.classList.add("animation-out");
});
