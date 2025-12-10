(function() {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    const bootstrapLink = document.getElementById("theme-bootstrap");

    const darkTheme = "https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/darkly/bootstrap.min.css";
    const lightTheme = "https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/flatly/bootstrap.min.css";

    // Charger le thème sauvegardé
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
        root.classList.add("light");
        bootstrapLink.href = lightTheme;
    }

    // Toggle du thème
    if (toggle) {
        toggle.addEventListener("click", () => {
            const isLight = root.classList.toggle("light");

            if (isLight) {
                bootstrapLink.href = lightTheme;
                localStorage.setItem("theme", "light");
            } else {
                bootstrapLink.href = darkTheme;
                localStorage.setItem("theme", "dark");
            }
        });
    }
})();
