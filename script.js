const modal = document.getElementById('modal');
const btnShare = document.getElementById('btn-share');
const modal__btnShare = modal.querySelector(".btn-share");

btnShare.addEventListener('click' , function(){
    modal.style.visibility = "visible";
}); 

modal__btnShare.addEventListener( 'click' , ()=>{
    modal.style.visibility = "hidden";
})