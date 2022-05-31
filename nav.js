const openMenu = () => {
    document.querySelector(selectors, '.backdrop').className = 'backdrop active';
    document.querySelector(selectors, 'aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector(selectors, '.backdrop').className = 'backdrop active';
    document.querySelector(selectors, 'aside').className = ''
}
document.getElementById(elementId, 'menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}