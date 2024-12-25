function toggleSubMenu(btn) {
  console.log(btn)
  btn.nextElementSibling.classList.toggle('show');
  
}

const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
function toggleSideBar() {
  sidebar.classList.toggle('close');
}