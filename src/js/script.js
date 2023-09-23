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

const formContent = document.querySelector('.form_content');
const login = document.querySelector('.login_link');
const register = document.querySelector('.register_link');

register.addEventListener('click', ()=> {
    formContent.classList.add('active');
});

login.addEventListener('click', ()=> {
    formContent.classList.remove('active');
});
