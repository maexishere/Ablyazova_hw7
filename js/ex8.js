console.log(document.body.childNodes[0]);
//the output is the space between tags
console.log(document.body.childNodes[1]);
//the first element in the body
console.log(document.body.childNodes[20]);
//the element is undefined since the index exceeds the amount of nodes
console.log(document.body.childNodes[5].childNodes[0]);
//the output is the space between tags
console.log(document.body.childNodes[5].childNodes[1]);
//the output is the first element of the fifth child node
