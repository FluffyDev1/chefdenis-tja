document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        let menu = document.querySelector('.mobile-menu-overlay');
        if(menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open');
        } else {
            menu.classList.add('menu-open');
        }
    });


    document.querySelector('.close-menu').addEventListener('click', () => {
        let menu = document.querySelector('.mobile-menu-overlay');
        if(menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open');
        } else {
            menu.classList.add('menu-open');
        }
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', (ev) => {
            if(ev.target.attributes['href'])
                document.location.href = ev.target.attributes['href']?.value;
        })
    })
})


function toggleTheme() {
    document.documentElement.classList.toggle('light');
    const isLight = document.documentElement.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
