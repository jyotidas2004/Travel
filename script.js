let DarkMode = false;

function replace(find, replace) {
    let elements = document.getElementsByClassName(find);
    while (elements.length) {
        elements[0].classList.add(replace);
        elements[0].classList.remove(find);
        elements = document.getElementsByClassName(find);
    }
}

function darkmode() {
    document.body.style.backgroundColor = "#111111";
    replace("navbar-light", "navbar-dark");
    replace("fa-sun", "fa-moon");
    replace("toggle-icon-light", "toggle-icon-dark");
    replace("light-mode-icon", "dark-mode-icon");
    replace("light-mode-h3", "dark-mode-h3");
    replace("light-mode-h1", "dark-mode-h1");
    replace("light-mode-p", "dark-mode-p");
    replace("light-card", "dark-card");
    replace("bg-light-banner", "bg-dark-banner");
    replace("light-card-title", "dark-card-title");
    replace("light-hover", "dark-hover");
    replace("light-brands", "dark-brands");
    replace("btn-outline-success", "btn-outline-info");
}

function lightmode() {
    document.body.style.backgroundColor = "#fff";
    replace("navbar-dark", "navbar-light");
    replace("fa-moon", "fa-sun");
    replace("toggle-icon-dark", "toggle-icon-light");
    replace("dark-mode-icon", "light-mode-icon");
    replace("dark-mode-h3", "light-mode-h3");
    replace("dark-mode-h1", "light-mode-h1");
    replace("dark-mode-p", "light-mode-p");
    replace("dark-card", "light-card");
    replace("bg-dark-banner", "bg-light-banner");
    replace("dark-card-title", "light-card-title");
    replace("dark-hover", "light-hover");
    replace("dark-brands", "light-brands");
    replace("btn-outline-info", "btn-outline-success");
}

function toggle() {
    DarkMode ? lightmode() : darkmode();
    DarkMode = DarkMode ? false : true;
}

toggleBtn.addEventListener("click", () => { toggle(); });
