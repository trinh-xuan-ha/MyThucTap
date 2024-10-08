const btnLike = document.querySelector('.edf');
const popup = document.querySelector('.abc');
btnLike.addEventListener('click', () => {
    popup.clssList.add("oppacity-100","right-5")
    setTimeout(() => {
        popup.classList.remove("oppacity-100","right-5")
    }, 2000)

})