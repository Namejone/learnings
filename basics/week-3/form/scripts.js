
const header = document.getElementById('header');
const body = document.body;
let isSticky = false;
const handleScroll = () => {
  const headerHeight = header.offsetHeight;
  if (window.scrollY > 0 && !isSticky) {
    header.classList.add('sticky');
    const headerFill = document.createElement('div');
    headerFill.className = 'dummy-div';
    headerFill.style.setProperty('--header-height', `${headerHeight}px`);
    body.insertBefore(headerFill, body.firstChild);
    isSticky = true;
  } else if (window.scrollY === 0 && isSticky) {
    header.classList.remove('sticky');
    const dummyDiv = document.querySelector('.dummy-div');
    if (dummyDiv) {
      body.removeChild(dummyDiv);
    }
    isSticky = false
  }
}

window.addEventListener('scroll', handleScroll);



// form-validation





































