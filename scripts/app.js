const modalBtn = document.getElementById('open-sidebar');
const mobileSidebarModal = document.querySelector('.sidebar-modal');
const closeMobileSidebarModal = document.querySelector('#close-sidebar')

modalBtn.addEventListener('click', () => {
    console.log('btn clicked');
    mobileSidebarModal.style.display = 'block';
})

closeMobileSidebarModal.addEventListener('click', () => {
    mobileSidebarModal.style.display = 'none';
})