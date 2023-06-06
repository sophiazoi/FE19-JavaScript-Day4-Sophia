document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let age = document.getElementById("age").value;
  let profession = document.getElementById("profession").value;

  let outputDiv = document.getElementById("output");
  outputDiv.textContent = `First Name: ${firstname}
  Last Name: ${lastname}
  Age: ${age}`;

  if (firstname.length > 5) {
    outputDiv.classList.add("green-text");
    outputDiv.classList.remove("red-text");
  } else {
    outputDiv.classList.add("red-text");
    outputDiv.classList.remove("green-text");
  }
  if (profession === "it") {
    outputDiv.classList.add("purple-bg");
    outputDiv.classList.remove("yellow-bg");
  } else if (profession === "hospitality") {
    outputDiv.classList.add("yellow-bg");
    outputDiv.classList.remove("purple-bg");
  } else {
    outputDiv.classList.remove("purple-bg", "yellow-bg");
  }
});
