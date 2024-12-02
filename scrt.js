function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const orderButtons = document.querySelectorAll('.card-button, .btn1');
orderButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const notification = button.nextElementSibling;
    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000);
  });
});