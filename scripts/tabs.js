
function showTab(id, element) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
  element.classList.add('active');
  document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
}
