function homePage() {
  let detail = document.querySelector(".detail");
  let side = document.querySelector(".aside");

  let homePageImg = document.createElement("img");
  homePageImg.className = "my-picture";
  homePageImg.src = "images/ProfilePic.png";
  side.appendChild(homePageImg);

  let interest = document.createElement("h3");
  interest.className = "interest";
  interest.innerText = "Interest";
  side.appendChild(interest);

  let interestUl = document.createElement("ul");
  interestUl.className = "interest-ul";
  interest.appendChild(interestUl);

  let interestLi1 = document.createElement("li");
  interestLi1.innerText = "Golf";
  interestUl.appendChild(interestLi1);

  let interestLi2 = document.createElement("li");
  interestLi2.innerText = "Watching Sports";
  interestUl.appendChild(interestLi2);

  let interestLi3 = document.createElement("li");
  interestLi3.innerText = "Going to the beach";
  interestUl.appendChild(interestLi3);

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
