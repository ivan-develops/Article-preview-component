const modal = document.getElementById('modal');
const btnShare = document.getElementById('btn-share');
const modal__btnShare = modal.querySelector(".btn-share");

modal__btnShare.addEventListener( 'click' , ()=>{
    modal.classList.toggle('active');
});

btnShare.addEventListener( 'click' , ()=>{
    modal.classList.toggle('active');
} );