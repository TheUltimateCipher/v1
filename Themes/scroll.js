// Get the current page URL
const currentPage = window.location.pathname;

// Extract the last part of the URL (e.g., 'index.html', 'settings.html')
const pageName = currentPage.substring(currentPage.lastIndexOf('/') + 1);


const container = document.querySelector('.square');
const title = document.querySelector('h1');

function adjustPadding() {
  if (container.scrollHeight > container.clientHeight) {
    
      container.style.paddingTop = '75px'; // Add padding when scrolling is needed
    
  } else {
    container.style.paddingTop = '0'; // Remove padding when not needed
  }
}

window.addEventListener('resize', adjustPadding);
window.addEventListener('load', adjustPadding);
