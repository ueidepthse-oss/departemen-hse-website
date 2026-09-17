/* =========================================================
   DEPARTEMEN HSE
   GLOBAL JAVASCRIPT
   Version: 1.0
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");

    if (navbarToggle && navbarMenu) {

        navbarToggle.addEventListener("click", () => {

            const isOpen = navbarMenu.classList.toggle("is-open");

            navbarToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu when navigation link is clicked */

        const navLinks = navbarMenu.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navbarMenu.classList.remove("is-open");

                navbarToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", (event) => {

            const clickedInsideMenu =
                navbarMenu.contains(event.target);

            const clickedToggle =
                navbarToggle.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedToggle
            ) {

                navbarMenu.classList.remove("is-open");

                navbarToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }

});
