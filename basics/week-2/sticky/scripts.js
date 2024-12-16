
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


// accordion
const accHeaders = document.querySelectorAll('.accordion-title');

accHeaders.forEach(accHeader => {
  accHeader.addEventListener('click', function () {
    accHeaders.forEach(header => header.classList.remove('active'))


    const accContent = accHeader.nextElementSibling;
    const accContents = document.querySelectorAll('.accordion-content');
    accContents.forEach(content => {
      if (content !== accContent) {
        content.classList.remove('show');
        content.style.maxHeight = null;
      }
    });

    accContent.classList.toggle('show');
    this.classList.toggle('active')
    accContent.style.maxHeight = accContent.scrollHeight + "px";
  });
});




