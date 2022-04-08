//Country list

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan"
];

document.getElementById("country").addEventListener("input", e => {
  countryList.forEach(country => {
    if (country.startsWith(e.target.value)) {
      document.getElementById("suggestions").innerHTML += `<p choice="${country}"class="country">${country}</p>`;
    };
  });

  let eList = Array.from(document.querySelectorAll(".country"));
  eList.map((e) => {
    e.addEventListener("click", function () {
      document.getElementById("country").value = this.getAttribute('choice');
      document.getElementById("suggestions").textContent = "";
    });
  });
});