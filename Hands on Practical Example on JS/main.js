//Task 1:
function change_img() {
    let images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        let img = images[i];
        img.src = "https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif";
    }
}


//Task 2:
function capitalizes() {
    let text = document.querySelectorAll('p');
    for (let i = 0; i < text.length; i++) {
        let x = text[i].textContent.toUpperCase();
        document.querySelectorAll('p')[i].textContent = x;
    }
}