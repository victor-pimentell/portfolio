const backend = document.getElementById('backend');
const backendBtn = document.getElementById('backend-btn');

const frontend = document.getElementById('frontend');
const frontendBtn = document.getElementById('frontend-btn');

const side = document.getElementById('side');
const sideBtn = document.getElementById('side-btn');

backendBtn.addEventListener("click", (event) => {
    frontend.style.display = "none";
    side.style.display = "none";
    backend.style.display = "flex";
    
    backendBtn.classList.add("active-btn");
    frontendBtn.classList.remove("active-btn");
    sideBtn.classList.remove("active-btn");
});

frontendBtn.addEventListener("click", (event) => {
    frontend.style.display = "flex";
    side.style.display = "none";
    backend.style.display = "none";
    
    backendBtn.classList.remove("active-btn");
    frontendBtn.classList.add("active-btn");
    sideBtn.classList.remove("active-btn");
});

sideBtn.addEventListener("click", (event) => {
    frontend.style.display = "none";
    side.style.display = "flex";
    backend.style.display = "none";
    
    backendBtn.classList.remove("active-btn");
    frontendBtn.classList.remove("active-btn");
    sideBtn.classList.add("active-btn");
});


// Light and Dark mode

document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const toggleIcon = document.querySelector('img[alt="theme icon"]');

    const githubLogo = document.querySelector('img[alt="github-icon"]');
    const emailLogo = document.querySelector('img[alt="email-icon"]');
    const linkedinLogo = document.querySelector('img[alt="linkedin-icon"]');

    toggleThemeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);
    });

    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);
    };

    loadTheme();
})