// Shared by every page: the mobile menu and the footer year.
(function () {
  var header = document.getElementById("site-header");
  var toggle = header && header.querySelector(".nav-toggle");

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("is-open"));
    });
    // Same-page anchors don't reload, so close the menu once a link is picked.
    header.querySelectorAll(".site-nav a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  var year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = year; });
})();
