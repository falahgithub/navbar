const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

function toggleSideBar(){
  sidebar.classList.toggle('close');
  toggleBtn.classList.toggle('rotate');
  closeAllSubmenus();
  
}


function toggleSubMenu(btn){

  if(!btn.nextElementSibling.classList.contains('show')){

  closeAllSubmenus();
  }

  btn.nextElementSibling.classList.toggle('show');
  btn.classList.toggle('rotate');

  if(sidebar.classList.contains('close')){
    sidebar.classList.remove('close');
    toggleBtn.classList.remove('rotate');
  }
}



function closeAllSubmenus() {
  const allOpenSubMenus = Array.from(sidebar.getElementsByClassName('show'))
  allOpenSubMenus.forEach(subMenu => {
    subMenu.classList.remove('show')
    subMenu.previousElementSibling.classList.remove('rotate')
  });
}
