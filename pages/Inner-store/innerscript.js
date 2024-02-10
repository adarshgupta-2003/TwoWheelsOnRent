const popup = document.querySelector('.popup');
    
function closePopup() {
  popup.style.display="none"
  const hero = document.querySelector('.hero');
  const store = document.querySelector('.store');
  const footer = document.querySelector('.footer');
  const lowerfooter = document.querySelector('.lower-footer');
  hero.style.display="block";
  store.style.display="block";
  footer.style.display="flex";
  lowerfooter.style.display="flex";
}

function showPopup() {  
  popup.style.display="flex";
  const hero = document.querySelector('.hero');
  const store = document.querySelector('.store');
  const footer = document.querySelector('.footer');
  const lowerfooter = document.querySelector('.lower-footer');
  hero.style.display="none";
  store.style.display="none";
  footer.style.display="none";
  lowerfooter.style.display="none";
  // window.onscroll = function () { window.scrollTo(0, 0); };
  
}

function showSideBar() {
const mobileBar = document.querySelector('.mobile-sidebar');
// allContent.style.display = 'none';
mobileBar.style.display="flex"
}

function closeSideBar() {
const mobileBar = document.querySelector('.mobile-sidebar');
// allContent.style.display = 'block';
mobileBar.style.display="none"
}