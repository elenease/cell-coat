var intro = document.querySelector('.intro');
var sidebar = document.querySelector('.sidebar');

if (intro) {
  var operators_block = intro.querySelector('.operators__list');
}

if (sidebar) {
  var sidebar_operators_block = sidebar.querySelector('.operators__list');
}

var operatorsBlockClickHandler = function(evt) {
  var target = evt.target.closest('li');
  target.classList.toggle('operators__item--active');
  var input = target.querySelector('input');
  input.getAttribute('checked') == 'checked' ? input.setAttribute('checked', false) : input.setAttribute('checked', 'checked');
};

if (operators_block) {
  operators_block.addEventListener('click', operatorsBlockClickHandler);
}

if (sidebar_operators_block) {
  sidebar_operators_block.addEventListener('click', operatorsBlockClickHandler);
}

// Открытие/скрытие меню

var sidebar = document.querySelector('.sidebar');
var sidebar_toggle = document.querySelector('.sidebar__toggle');

if (sidebar && sidebar_toggle) {

  var sidebarToggleClickHandler = function(evt) {
    var targetBtn = evt.target.closest('button');
    sidebar.classList.toggle('v-hidden');

    if (sidebar.classList.contains('v-hidden')) {
      sidebar_toggle.style.marginLeft = '20px';
    } else {
      sidebar_toggle.style.marginLeft = '300px';
    }
  };

  sidebar_toggle.addEventListener('click', sidebarToggleClickHandler);

}
