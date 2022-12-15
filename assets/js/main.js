/*****************************************/
/* DropDown Menu */
/****************************************/

const dropdowns = document.querySelectorAll('.dropdown');

function removeShowClass(skipIndex) {
  dropdowns.forEach((dropdown, index) => {
    if (index === skipIndex) {
      return;
    }
    dropdown.classList.remove('show');
  });
}

function dropdownMenuToggle() {
  dropdowns.forEach((dropdown, i) => {
    dropdown.childNodes[1].addEventListener('click', (e) => {
      removeShowClass(i);
      dropdown.classList.toggle('show');
    });
  });
}

dropdownMenuToggle();
