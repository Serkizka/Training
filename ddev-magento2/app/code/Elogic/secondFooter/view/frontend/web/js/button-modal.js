let modal = document.getElementById("modal");
let btn = document.getElementById("footer-button");
let overlay = document.getElementById("overlay");
let closeBtn = document.getElementById("modal-close");


btn.addEventListener("click", clicked);
closeBtn.addEventListener("click", close);

function clicked(ev) {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
}

function close() {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
}
