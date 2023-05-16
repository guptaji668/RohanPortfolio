const darkbtn = document.getElementById('dark-mode');

const sidebar = document.getElementsByClassName('sidebar')[0];


darkbtn.addEventListener('click', () => {

    // document.body.classList.add('light-mode');

    document.body.style.backgroundColor = '#fff';

})


const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () =>{
    sidebar.classList.toggle('sidebar-ham');
})