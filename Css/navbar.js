function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');
    const toggleBtn = document.getElementById('toggleBtn');

    sidebar.classList.toggle('hidden');
    mainWrapper.classList.toggle('full');

    if (sidebar.classList.contains('hidden')) {
      toggleBtn.classList.remove('sidebar-visible');
      toggleBtn.classList.add('sidebar-hidden');
    } else {
      toggleBtn.classList.remove('sidebar-hidden');
      toggleBtn.classList.add('sidebar-visible');
    }
  }