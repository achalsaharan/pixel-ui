const modalBtn = document.getElementById('open-sidebar');
const mobileSidebarModal = document.querySelector('.sidebar-modal');
const closeMobileSidebarModal = document.querySelector('#close-sidebar');

modalBtn.addEventListener('click', () => {
    console.log('btn clicked');
    mobileSidebarModal.style.display = 'block';
});

closeMobileSidebarModal.addEventListener('click', () => {
    mobileSidebarModal.style.display = 'none';
});

mobileSidebarModal.addEventListener('click', (e) => {
    if (e.target.className === 'sidebar-modal') {
        mobileSidebarModal.style.display = 'none';
    }

    if (e.target.tagName === 'A') {
        mobileSidebarModal.style.display = 'none';
    }
});

window.addEventListener('hashchange', function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
