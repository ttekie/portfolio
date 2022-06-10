let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');
let mobileNavItems = document.querySelector('.mobile-nav__items');

toggleButton.addEventListener('click', () => {
   backdrop.classList.add('show');
   mobileNav.classList.add('show');
});
   
backdrop.addEventListener('click', eventListener);
mobileNav.addEventListener('click', eventListener);
function eventListener() {
   mobileNav.classList.remove('show');
   backdrop.classList.remove('show');
}
mobileNavItems.addEventListener('click', (event) => {
   let target = event.target; 
   switch(target.id) {
      case 'home':
         eventListener();
         break;
      case 'about':
         eventListener();
         break;
      case 'skill':
         eventListener();
         break;
      case 'projects':
         eventListener();
         break;
      case 'contacts':
         eventListener();
         break;
   }
});