// theme.js - የጋራ የዳርክ ሞድ ቁጥጥር
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("habAdisTheme", isDark ? "dark" : "light");
}

// ገጹ ሲከፈት የተቀመጠውን ጭብጥ በራስ-ሰር መጫኛ
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("habAdisTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});