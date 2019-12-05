import { BehaviorSubject } from "rxjs/BehaviorSubject";

var subject = new BehaviorSubject('First');

subject.subscribe(
    data => addItem('Observer1 ' + data),
    err => addItem(err),
    () => addItem('Observer1 completed')
);

subject.next("The first thing has been set");
subject.next("...Observer 2 is going to be called ...")

var observer2 = subject.subscribe(
    data => addItem('Observer2 ' + data)
);
subject.next('The second thing has been set');
subject.next('Third thing has been set');

observer2.unsubscribe();

subject.next('Final thing got called');

function addItem(val: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}