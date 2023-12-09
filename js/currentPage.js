document.addEventListener("DOMContentLoaded", function () {
    
    const currentPageUrl = window.location.href;
    const navLinks = document.querySelectorAll('.menuItem');
  
    
    navLinks.forEach(link => {
      const linkUrl = link.href;
      if (currentPageUrl === linkUrl) {
        link.classList.add('current-page');
      }
    });
  });