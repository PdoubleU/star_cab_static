export const menu_button = document.querySelector('.menu-btn');
export const button_inner = document.querySelector('.menu-btn__inner');
export const navigation = document.querySelector('.top-nav');
export const handleClick = () => {
  button_inner.classList.toggle('menu-btn__inner--active');
  navigation.classList.toggle('top-nav--active');
}
menu_button.addEventListener('click', handleClick);
