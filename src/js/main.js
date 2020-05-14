//this code is responsible for animation of burger-button:
const menu_button = document.querySelector('.menu-btn');
const button_inner = document.querySelector('.menu-btn__inner');
const navigation = document.querySelector('.top-nav');
const handleClick = () => {
  button_inner.classList.toggle('menu-btn__inner--active');
  navigation.classList.toggle('top-nav--active');
}

menu_button.addEventListener('click', handleClick);



