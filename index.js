console.log("hello");

var modal = document.getElementByClassName("popup_main");

// Get the button that opens the modal
var btn = document.getElementByClassName("enquire");

// Get the <span> element that closes the modal
var span = document.getElementByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  console.log("in");
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  document.querySelector(".submit").value = "Submitting";
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbwnXVOO9pTYnHytyRwWOhs_KJlg5mRNS7onuVZcTwCHG3Jb0gIsw9i6SnA5QeCvqjpc/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      document.querySelector(".submit").value = "Submit";
      alert("Thank you for sharing your details");
    });
  data = JSON.stringify(Object.fromEntries(data));
  console.log(data);
  fetch(
    "https://api.propacity.in/api/v1/webhooks/integration/794d3601-ec97-454f-a3b8-6c5961ff8da8/insertLead",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      alert("Data sent to API successfully");
    });
});
