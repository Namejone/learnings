
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
    accHeaders.forEach(header => header.classList.remove('active'));
    const accContents = document.querySelectorAll('.accordion-content');
    accContents.forEach(content => {
      if (content !== accHeader.nextElementSibling) {
        content.classList.remove('show');
        content.style.maxHeight = null;
      }
    });
    const accContent = accHeader.nextElementSibling;
    accHeader.classList.toggle('active');
    if (accContent.classList.contains('show')) {
      accContent.classList.remove('show');
      accContent.style.maxHeight = null;
    } else {
      accContent.classList.add('show');
      accContent.style.maxHeight = accContent.scrollHeight + "px";
    }
  });
});



// tabs
document.addEventListener("DOMContentLoaded", function () {
  const inTabs = () => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
      const tabBtns = tab.querySelectorAll('.tabNav button');
      const tabContents = tab.querySelectorAll('.tab-content');
      tabBtns.forEach((button) => {
        button.addEventListener('click', () => {
          const targetId = button.dataset.tabTarget;
          tabBtns.forEach((tabBtn) => tabBtn.classList.remove('active'));
          tabContents.forEach((tabContent) => tabContent.classList.remove('show'));
          button.classList.add('active');
          tab.querySelector(`#${targetId}`).classList.add("show");
          console.log(button.dataset);
        })
      })
    });
  }
  inTabs();
});


