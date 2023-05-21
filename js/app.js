document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.navbar-nav .nav-item');
  
    function handleClick(event) {
      event.preventDefault();
  
      navItems.forEach(function(item) {
        item.classList.remove('active');
      });
  
      this.classList.add('active');
    }

    navItems.forEach(function(navItem) {
      navItem.addEventListener('click', handleClick);
    });
  });
  
  
  
  