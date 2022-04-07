const change = () => {
    for (const paragraphElement of document.querySelectorAll("p")) {
        paragraphElement.style.backgroundColor = "black";
        paragraphElement.style.fontWeight = "bold";
      }
};
change();