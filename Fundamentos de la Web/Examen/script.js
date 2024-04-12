document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        alert('The Ninjas have won!');
    }, 13000); 
});

var clickable = document.querySelectorAll('.score');

clickable.forEach(function(element) {
    element.addEventListener('click', function() {
        //console.log("suma");
        this.textContent = parseInt(this.textContent) + 1;
    });
});

document.getElementById('subs').addEventListener('click', function() {
    document.querySelector('#suscripcion').style.display = 'none';
});