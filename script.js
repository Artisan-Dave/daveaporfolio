let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');


menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
  strings: ['Web Developer', 'Mobile App Developer'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true
});

function setupToggle(buttonId, textId, iconId) {
  const button = document.getElementById(buttonId);
  const text = document.getElementById(textId);

  if (button && text) {
    button.addEventListener('click', () => {
      const isHidden = text.style.display === 'none' || text.style.display === '';

      text.style.display = isHidden ? 'block' : 'none';
      button.textContent = isHidden ? 'Read Less' : 'Read More';
    });
  }
}

// Call the function for each pair
setupToggle('rm-about', 'p-about');
setupToggle('rm-services', 'p-services');
setupToggle('rm-services2', 'p-services2');
setupToggle('rm-projects', 'p-projects');


