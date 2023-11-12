document.addEventListener('DOMContentLoaded', function () {
    const nightModeToggle = document.getElementById('night-mode-toggle');
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // Add a click event handler to the "Read More" links for all projects
    document.querySelectorAll(".read-more").forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const projectId = this.getAttribute("data-project-id");
            openPopup(projectId);
        });
    });

    // Add a click event handler to the close buttons in the popups for all projects
    document.querySelectorAll(".popup .close").forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const projectId = this.closest(".overlay").getAttribute("data-project-id");
            closePopup(projectId);
        });
    });

    // Function to open a popup
    function openPopup(projectId) {
        document.querySelector(`#popup${projectId}`).style.display = "block";
    }

    // Function to close a popup
    function closePopup(projectId) {
        document.querySelector(`#popup${projectId}`).style.display = "none";
    }
});
