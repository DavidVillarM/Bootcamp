var like = 0;
var likeElement = document.querySelector("#like")

console.log()

function flike(element){
    like++;
    likeElement.innerText = like + " like(s)"
    console.log(like)
}