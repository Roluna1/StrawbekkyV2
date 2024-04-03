let showLinksMobile = document.querySelector('.burger-button-img');
      
showLinksMobile.addEventListener('click', () => {
const linkonMobile = document.querySelectorAll('.linkonMobile');
linkonMobile.forEach(link => {
link.style.display = 'flex';
console.log('click')
  });
});

let closeLinksMobile = document.querySelector('.close-button')
closeLinksMobile.addEventListener('click', () => {

  const linkonMobile = document.querySelectorAll('.linkonMobile');
linkonMobile.forEach(link => {
link.style.display = 'none';
console.log('click')
  });
})