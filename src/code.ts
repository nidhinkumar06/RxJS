import { from } from 'rxjs/observable/from';
import "rxjs/add/operator/pluck";

  from([
      {first: 'Nidhin', last: 'Kumar', age: 26},
      {first: 'Raj', last: 'Kumar', age: 46},
      {first: 'Stanley', last: 'Kumar', age: 20},
  ])
    .pluck('first')
    .subscribe((x: any) => addItem(x));


function addItem(val: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}