var nestedTabSelect = (tabsElement, currentElement) => {
    const tabs = tabsElement ?? 'ul.tabs';
    const currentClass = currentElement ?? 'active';
    
    document.querySelectorAll(tabs).forEach(function (tabContainer) {
      let activeLink, activeContent;
      const links = Array.from(tabContainer.querySelectorAll("a"));
  
      activeLink =
        links.find(function (link) {
          return link.getAttribute("href") === location.hash;
        }) || links[0];
      activeLink.classList.add(currentClass);
  
      activeContent = document.querySelector(activeLink.getAttribute("href"));
      activeContent.classList.add(currentClass);
  
      links.forEach(function (link) {
        if (link !== activeLink) {
          const content = document.querySelector(link.getAttribute("href"));
          content.classList.remove(currentClass);
        }
      });
  
      tabContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          // Make the old tab inactive.
          activeLink.classList.remove(currentClass);
          activeContent.classList.remove(currentClass);
  
          // Update the variables with the new link and content.
          activeLink = e.target;
          activeContent = document.querySelector(activeLink.getAttribute("href"));
  
          // Make the tab active.
          activeLink.classList.add(currentClass);
          activeContent.classList.add(currentClass);
  
          e.preventDefault();
        }
      });
    });
  };
  
  nestedTabSelect('ul.tabs', 'active');
  