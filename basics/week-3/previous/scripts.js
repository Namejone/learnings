
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
// const accHeaders = document.querySelectorAll('.accordion-title');
// accHeaders.forEach(accHeader => {
//   accHeader.addEventListener('click', function () {
//     accHeaders.forEach(header => header.classList.remove('active'));
//     const accContents = document.querySelectorAll('.accordion-content');
//     accContents.forEach(content => {
//       if (content !== accHeader.nextElementSibling) {
//         content.classList.remove('show');
//         content.style.maxHeight = null;
//       }
//     });
//     const accContent = accHeader.nextElementSibling;
//     accHeader.classList.toggle('active');
//     if (accContent.classList.contains('show')) {
//       accContent.classList.remove('show');
//       accContent.style.maxHeight = null;
//     } else {
//       accContent.classList.add('show');
//       accContent.style.maxHeight = accContent.scrollHeight + "px";
//     }
//   });
// });



// tabs
// document.addEventListener("DOMContentLoaded", function () {
//   const inTabs = () => {
//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach((tab) => {
//       const tabBtns = tab.querySelectorAll('.tabNav button');
//       const tabContents = tab.querySelectorAll('.tab-content');
//       tabBtns.forEach((button) => {
//         button.addEventListener('click', () => {
//           const targetId = button.dataset.tabTarget;
//           tabBtns.forEach((tabBtn) => tabBtn.classList.remove('active'));
//           tabContents.forEach((tabContent) => tabContent.classList.remove('show'));
//           button.classList.add('active');
//           tab.querySelector(`#${targetId}`).classList.add("show");
//           console.log(button.dataset);
//         })
//       })
//     });
//   }
//   inTabs();
// });
document.addEventListener("DOMContentLoaded", function () {
  const initializeTabs = (container) => {
    const tabs = container.querySelectorAll('.tab');
    tabs.forEach((tab) => {
      const tabBtns = tab.querySelectorAll('.tabNav button');
      const tabContents = tab.querySelectorAll('.tab-content');

      tabBtns.forEach((button) => {
        button.addEventListener('click', () => {
          const targetId = button.dataset.tabTarget;

          // Reset all buttons and contents within this .tab
          tabBtns.forEach((tabBtn) => tabBtn.classList.remove('active'));
          tabContents.forEach((tabContent) => tabContent.classList.remove('show'));

          // Activate the clicked tab and its content
          button.classList.add('active');
          tab.querySelector(`#${targetId}`).classList.add('show');
        });
      });
    });
  };

  // Initialize tabs for the entire document
  initializeTabs(document);
});



// Modal

const modalInit = () => {
  const modalBtns = document.querySelectorAll('[data-modal]');
  modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', () => {
      const tergetModal = document.getElementById(modalBtn.dataset.modalTarget);
      if (tergetModal) {
        tergetModal.classList.add('show');
      }
    })
  });

  const modalCloses = document.querySelectorAll('.modal-close');
  modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
      const nearestModal = modalClose.closest('.modal');
      if (nearestModal) {
        nearestModal.classList.remove('show');
      }
    });
  })

  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('show');
    }
  })

}

modalInit();


// accordion css
document.addEventListener('click', (event) => {
  if (event.target.matches('.accordion-button') || event.target.closest('.accordion-button')) {
    const button = event.target.closest('.accordion-button');
    const targetId = button.getAttribute('data-bs-target');
    const targetPanel = document.querySelector(targetId);
    if (!targetPanel) return;
    const isOpen = targetPanel.classList.contains('show');
    closeAllPanels(button.closest('.accordion')); // Close others

    if (!isOpen) {
      openPanel(targetPanel, button);
    }
  }
});

function openPanel(panel, button) {
  panel.style.transition = 'none'; // Disable transitions for measurement
  panel.style.maxHeight = 'none';
  const height = panel.scrollHeight + 'px';
  panel.style.maxHeight = '0'; // Reset for animation
  panel.style.transition = 'max-height 0.3s ease, padding 0.3s ease'; // Re-enable transitions

  requestAnimationFrame(() => {
    panel.style.maxHeight = height;
  });

  panel.classList.add('show');
  button.classList.remove('collapsed');
}

function closeAllPanels(accordion) {
  const openPanels = accordion.querySelectorAll('.accordion-collapse.show');
  const openButtons = accordion.querySelectorAll('.accordion-button:not(.collapsed)');

  openPanels.forEach((panel) => {
    panel.style.maxHeight = panel.scrollHeight + 'px'; // Set current height
    requestAnimationFrame(() => {
      panel.style.maxHeight = '0';
    });
    panel.classList.remove('show');
  });

  openButtons.forEach((button) => button.classList.add('collapsed'));
}



























































