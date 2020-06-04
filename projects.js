function project() {
  projectBtn();
}

function projectBtn() {
  let button = document.querySelector("#btn-project-projects");
  button.addEventListener("click", function () {
    let detail = document.querySelector(".detail");
    detail.innerHTML = "";
  });
}
