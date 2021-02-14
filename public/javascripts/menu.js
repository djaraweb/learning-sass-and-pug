/*===== LINK ACTIVE  =====*/
const linkActive = document.querySelectorAll(".nav__link");
function colorLink() {
  linkActive.forEach((nodo) => {
    nodo.classList.remove("nav__link-active");
    nodo.classList.remove("dropdown__link-active");
  });
  // Verificamos si el Nodo tiene Items
  let isNodeDropdown = this.querySelector(".collapse__icon-link");
  if (isNodeDropdown != null) {
    console.log("has items");
    this.classList.add("dropdown__link-active");
  } else {
    console.log("not has items");
    this.classList.add("nav__link-active");
  }
  console.log("nodo", this.parentNode.parentNode.parentNode);
}
linkActive.forEach((l) => l.addEventListener("click", colorLink));

/*===== DROPDOWN MENU  =====*/
const dropdownIconLink = document.getElementsByClassName("collapse__icon-link");
var i;
for (i = 0; i < dropdownIconLink.length; i++) {
  let parentNode = dropdownIconLink[i].parentNode;
  parentNode.addEventListener("click", function () {
    let dropdownMenu = this.nextElementSibling;
    let dropdownMenuRotateIcon = dropdownMenu.previousElementSibling.querySelector(
      ".collapse__icon-link"
    );
    dropdownMenu.classList.toggle("dropdown-show");
    dropdownMenuRotateIcon.classList.toggle("rotate-icon");
  });
}
