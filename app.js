var form = document.querySelector("#form");
var userData = [];

const getData = function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const image = document.getElementById("imageLink").value;

  var gender;
  var skills = [];

  const genderClicked = document.querySelectorAll('input[name="gender"]');

  for (const gen of genderClicked) {
    if (gen.checked) {
      gender = gen.value;
      break;
    }
  }

  const skillSelected = document.querySelectorAll('input[name="skills"]');
  for (const ski of skillSelected) {
    if (ski.checked) {
      skills.push(ski.value);
    }
  }

  return { name, email, website, image, gender, skills };
};

const resetform= function() {
  const name = document.getElementById("name");
  fullName.value = "";

  const email = document.getElementById("email");
  email.value = "";

  const website = document.getElementById("website");
  website.value = "";

  const image = document.getElementById("imageLink");
  image.value = "";

  const genderClicked = document.querySelectorAll('input[name="gender"]');
  for (const gen of genderClicked) {
    gen.checked = false;
  }

  const skillSelected = document.querySelectorAll('input[name="skills"]');
  for (const ski of skillSelected) {
    ski.checked = false;
  }
};


let butt = document.getElementById("add");

butt.addEventListener("click", function (event) {
  event.preventDefault();
  const data = getData();
  userData.push(data);
  displayData(data);
  resetform();
});

let card = document.getElementById("card");
let cardHeading = document.getElementById("card-heading");
let heading = document.createElement("h1");
heading.innerHTML = "Enrolled Students";

cardHeading.appendChild(heading);

function displayData(data) {
  card.innerHTML += `<div class="row card-row"">
  <div class="card bagCo">
  <div class="row">
    <div class="col-img">
      <img src="${data.image}" class="img-fluid rounded-circle m-3" alt="user Image">
    </div>
    <div class="col-lg-12">
      <div class="card-body">
        <p class="card-title">Name : ${data.name}</p>
        <p class="card-text">E-mail : ${data.email}</p>
        <p class="card-text">Website : ${data.website}</p>
        <p class="card-text">Gender : ${data.gender}</p>
        <p class="card-text">Skills : ${data.skills}</p>
      </div>
    </div>
  </div>
</div>
</div>
  `;
}
