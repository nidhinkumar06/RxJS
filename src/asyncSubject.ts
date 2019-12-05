import { AsyncSubject } from "rxjs/AsyncSubject";

var subject = new AsyncSubject();

subject.subscribe(
    data => addItem('Observer1 ' + data),
    () => addItem('Observer1 completed')
);

var i = 1;
var int = setInterval(() => subject.next(i++), 100);


setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer2 ' + data)
    );
    subject.complete(); //it will emit only the last item if complete is not available it wont return anything
}, 500);

function addItem(val: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}