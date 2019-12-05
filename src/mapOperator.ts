import { Observable } from 'rxjs';
import "rxjs/add/operator/map";

Observable.create((observer: any) => {
  observer.next("Hey guys !");
})
  .map((val: any) => val.toUpperCase())
  .subscribe((x: any) => addItem(x));


function addItem(val: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}