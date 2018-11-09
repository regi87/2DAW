//console.log(document);
//console.log(document.head);
//console.log(document.body);
//console.log(document.title);
//console.log(document.head.parentNode);
//console.log(document.head.nextSibling.nextSibling);
//console.log(document.body.firstChild);
//console.log(document.body.childNodes[1]);
//let children = document.body.childNodes;
//console.log(typeof(children));
//children.forEach( x => console.log(x));
//children.map( x => x+x );
//children.fulter( x => x.nodeType === 1 );
/*for (let child of children) {
    console.log(child);
}
let children = Array.from(document.body.childNodes);
console.log( children.filter(x => x.nodeType === 1 ));*/
console.log(document.body.firstChild.nextSibling.nextSibling.nextSibling.firstChild.
nextSibling.firstChild.nextSibling.firstChild.firstChild.nextSibling.firstChild.nextSibling.textContent);

