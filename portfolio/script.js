function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";
}

// Show About page by default
window.onload = function () {
  showPage("about");
};