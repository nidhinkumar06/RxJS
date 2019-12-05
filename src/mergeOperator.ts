import { Observable } from 'rxjs';
import { merge } from "rxjs/observable/merge";

var observable = Observable.create((observer: any) => {
  observer.next("Hey guys !");
});

var observable2 = Observable.create((observer: any) => {
    observer.next("What is going on");
});

var newObs = merge(observable, observable2);

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}