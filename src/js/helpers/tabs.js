export default function tabs() {
  const tabsContainers = document.querySelectorAll('.js-tabs-container');

  tabsContainers.forEach(tabsContainer => {
    const tabsList = tabsContainer.querySelector('.js-tabs');
    const tabs = tabsContainer.querySelectorAll('.js-tab');
    const contents = tabsContainer.querySelectorAll('.js-tab-content');

    tabsList.addEventListener('click', (e) => {
      if (e.target.closest('.js-tab')) {
        const target = e.target.closest('.js-tab')
        tabActivate(target.dataset.href);
      }
    })

    function tabActivate(id) {
      tabs.forEach((tab) => {
        if (tab.dataset.href === id) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      contents.forEach(tabContent => {
        if (tabContent.dataset.id === id) {
          tabContent.classList.add('active')
        } else {
          tabContent.classList.remove('active')
        }
      })
    }
  })

  window.initTabs = tabs;
}

