

function flike(button){
    var likeElement = button.parentNode.querySelector(".like");
    var currentLikes = parseInt(likeElement.innerText);
    likeElement.innerText = (currentLikes + 1) + " like(s)";
}