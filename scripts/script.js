// --------------------------------------
// gets DOM object references
const modal = document.querySelector(".modal");
const loginButton = document.querySelector(".login-btn");
const closeButton = document.querySelector(".close");

// --------------------------------------
// defines function for modal interaction
function openModal() {
    // changes display: none -> display:block
    modal.style.display = "block";
}

function closeModal() {
    // changes display: block -> display:none
    modal.style.display = "none";
}

// clicking anywhere outside the modal
// will close the login/sign up page
function outsideClick(e) {
    if (e.target == modal) {
        closeModal();
    }
}

// --------------------------------------
// adds event listeners
loginButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);