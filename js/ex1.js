// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};


//next try
const isThis = document.getElementById("house");
houses.forEach(house => {
  // Create options
  const opElement = document.createElement("option");
  opElement.textContent = house.name;
  isThis.appendChild(opElement);
});

//focus on house
isThis.focus();

const houseCode = document.getElementById("characters")
houses.forEach(house => {
  // add characters
  const codeElement = document.createElement("ul");
  codeElement.textContent = houseCode;
  houseCode.appendChild(codeElement);
});

//trying to connect value with characters?
const valueThis = document.getElementsByTagName("value")