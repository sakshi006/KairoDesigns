
const bottombtn = document.querySelector("#btn-bottom");
const topbtn = document.querySelector("#btn-top");
const bottomsnackbar = document.querySelector(".bottom")
const topsnackbar = document.querySelector(".top")
const closeBottom = document.querySelector("#close-bottom")
const closeTop = document.querySelector("#close-top")

function showSnackbar(e) {
    if (e.target.id === "btn-bottom") {
        bottomsnackbar.classList.add("show")
        setTimeout(function () { bottomsnackbar.classList.remove("show"); }, 3000)
    }
    else {
        topsnackbar.classList.add("show")
        setTimeout(function () { topsnackbar.classList.remove("show"); }, 5000)
    }
}


function hideSnackbar(e) {
    if (e.target.id === "close-bottom")
        bottomsnackbar.classList.remove("show")
    else
        topsnackbar.classList.remove("show")
}

bottombtn.addEventListener("click", e => showSnackbar(e))
topbtn.addEventListener("click", e => showSnackbar(e))
closeBottom.addEventListener("click", e => hideSnackbar(e))
closeTop.addEventListener("click", e => hideSnackbar(e))