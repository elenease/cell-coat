var intro = document.querySelector('.intro');
var operators_block = intro.querySelector('.operators__list');

var operatorsBlockClickHandler = function(evt) {
  var target = evt.target.closest('li');
  target ? target.classList.toggle('operators__item--active') : false;
};

operators_block.addEventListener('click', operatorsBlockClickHandler);
