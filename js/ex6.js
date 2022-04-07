const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];
  

  document.getElementById("content").innerHTML += '<dl id="terms"></dl>';
  document.getElementById("terms").innerHTML += '<dt id="pr">Procrastination</dt>';
  document.getElementById("pr").innerHTML += '<dd>Avoidance of doing a task that needs to be accomplished</dd>';
  document.getElementById("terms").innerHTML += '<dt id="tau">Tautology</dt>';
  document.getElementById("tau").innerHTML += '<dd>Logical argument constructed in such a way that it is logically irrefutable</dd>';
  document.getElementById("terms").innerHTML += '<dt id="ox">Oxymoron</dt>';
  document.getElementById("ox").innerHTML += '<dd>Figure of speech that juxtaposes elements that appear to be contradictory</dd>';

  //checking the output
  const bodyNodes = () => {
    for (const node of document.body.childNodes) {
        console.log(node);
      }
};
bodyNodes();