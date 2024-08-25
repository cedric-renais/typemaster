import './sass/style.scss';

//////////////////////////////////////////////////
// Affiche et met à jour la date dans le footer //
//////////////////////////////////////////////////
const date = document.querySelector('.footer__date');
const dateNow = new Date();
date.innerHTML = dateNow.getFullYear();
