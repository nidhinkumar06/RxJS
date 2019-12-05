import { Observable } from "rxjs/Observable";
import { fromEvent } from 'rxjs/observable/fromEvent';

//hot observable example

var observable = fromEvent(document, "mousemove");

setTimeout(() => {
    var subscription = observable.subscribe((x: any) => addItem(x))
}, 1000);

function addItem(val: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}