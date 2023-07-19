// get the dom objects one time
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');
const mobileNavItems = document.querySelector('.mobile-nav__items');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submitBtn = document.querySelector('[type="submit"]');

const contentInfo = [firstName, lastName, email, message];

submitBtn.addEventListener('click', handleChange);

function handleChange(event) {
   event.preventDefault(); // prevent the default submission of the form data

   let formValues = {
     firstName: firstName.value,
     lastName: lastName.value,
     email: email.value,
     message: message.value
   };

   if(formValues.firstName === '' && formValues.lastName === '' &&
      formValues.email === '') {
         alert('Please fill out the form before you submit!');
   } else {
      saveForm(formValues);
   }
   contentInfo.forEach(item => {
      item.value = '';
   });
}

function saveForm(formValues) {
   const formDataString = JSON.stringify(formValues);
   localStorage.setItem('form', formDataString);
}

toggleButton.addEventListener('click', () => {
   backdrop.classList.add('show');
   mobileNav.classList.add('show');
});
   
backdrop.addEventListener('click', eventListener);

function eventListener() {
   mobileNav.classList.remove('show');
   backdrop.classList.remove('show');
}
eventListener();
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