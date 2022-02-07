
const bottombtn = document.querySelector("#btn-bottom");
const closeBottom = document.querySelector("#close-bottom")
const modal =document.querySelector(".modal")

console.log(modal)

function ModalOpen() {
        modal.classList.add("show")
}


function ModalClose() 
        {modal.classList.remove("show")}

bottombtn.addEventListener("click",ModalOpen)
closeBottom.addEventListener("click", ModalClose)