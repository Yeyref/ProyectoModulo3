const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



const collapseimage = document.querySelectorAll('#myImage');

collapseimage.forEach(images => {
  images.addEventListener('click', function () {
    this.classList.toggle('enlarged');
  });
});


const image = document.getElementById('myProfileimage');

image.addEventListener('click', function () {
  this.classList.toggle('enlarged2');
});


const heading = document.getElementById('myHeading');
const text = document.getElementById('myText');

heading.addEventListener('click', function () {
  if (text.textContent === 'Reciente') {
    text.textContent = 'Hace un momento';
  }
});


const texto = document.querySelector('.myTexto')
texto.addEventListener('click', function () {
  if (this.classList.contains('bold')) {
    this.classList.remove('bold');
  }
});






const sourceDiv = document.getElementById('sourceDiv');
const sourceMessage = document.getElementById('sourceMessage');
const responseMessage = document.getElementById('responseMessage');
const targetDiv = document.getElementById('targetDiv');

window.addEventListener('resize', verificarAnchoPantalla);

sourceDiv.addEventListener('click', function () {
  
  const viewportWidth = window.innerWidth;

  if (viewportWidth > 900) {
    const textToDisplay = sourceDiv.innerHTML + sourceMessage.innerHTML + responseMessage.innerHTML;
    targetDiv.innerHTML = textToDisplay;
    targetDiv.style.display = 'flex';
    console.log('Debe mostrar pantalla grande');
  }
});

function miFuncion() {
  const collapseButtons = document.querySelectorAll('.collapse-btn');

  collapseButtons.forEach(button => {
    button.addEventListener('click', function () {
      const chatItem = this.closest('.chat-item');
      
      chatItem.classList.toggle('collapsed');
    });
  });
}


function verificarAnchoPantalla() {
  const viewportWidth = window.innerWidth;


  if (viewportWidth < 899) {
    console.log('Muestro pantalla chica');
    miFuncion();
  }
}



