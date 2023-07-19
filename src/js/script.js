function actionButton(){
    var button = document.querySelector('.button');
    button.classList.toggle('active');
}

function openNav(){
    document.querySelector(".nav-list").style.display = 'block';
    document.querySelector(".closebtn").style.display = 'block';
}

function closeNav(){
    document.querySelector(".nav-list").style.display = 'none';
    document.querySelector(".closebtn").style.display = 'none';
}

