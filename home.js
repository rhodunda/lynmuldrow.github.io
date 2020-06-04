function homePage() {
  let detail = document.querySelector(".detail");
  let side = document.querySelector(".aside");

  let homePageImg = document.createElement("img");
  homePageImg.className = "my-picture";
  homePageImg.src = "images/ProfilePic.png";
  side.appendChild(homePageImg);

  let homePageAbout = document.createElement("h3");
  homePageAbout.className = "about";
  homePageAbout.innerText =
    "I am a full stack web developer with a natural affinity for learning and experimenting to find creative solutions to complex problems. I have experience in Ruby on Rails and JavaScript based programming . Possess strong skills in project management and application concept designs that help companies better plan and create modern user-friendly business solutions.";
  detail.appendChild(homePageAbout);

  homeBtnAction();
}

function homeBtnAction() {
  let homeBtn = document.querySelector("#btn-project-home");
  homeBtn.addEventListener("click", function () {
    let detail = document.querySelector(".detail");
    detail.innerHTML = "";
    homePage();
  });
}
