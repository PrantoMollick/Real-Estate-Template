/*****************************************/
/* DropDown Menu */
/****************************************/

const dropdownSelectBtns = document.querySelectorAll('.dropdown-select');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
console.log(dropdownMenus);

const hideDropdownMenuHandler = (index) => {
  if (dropdownMenus[index].classList.contains('hide-dropdown-menu')) {
    dropdownMenus[index].classList.remove('hide-dropdown-menu');
  } else {
    dropdownMenus[index].classList.add('hide-dropdown-menu');
  }
  console.log(index);
};

dropdownSelectBtns.forEach((dropdownSelectBtn, index) => {
  dropdownSelectBtn.addEventListener(
    'click',
    hideDropdownMenuHandler.bind(this, index)
  );
});
