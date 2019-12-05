import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/share";

const observable = Observable.create((observer: any) => {
    try {
        observer.next("Hello rxjs");
        observer.next("Hello rdx");
        observer.next("Hello caesar");
        setInterval(() => {
            observer.next("Hello tester");
        }, 2000);
        // observer.complete();
        // observer.next("No one is allowed");
    } catch (error) {
        observer.error(error);
    }
  
}).share();

var observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Complete'),
);

// var observer2 = observable.subscribe(
//     (x: any) => addItem(x)
// );  //multiple subscription even if the parent is died the child will work on

// observer.add(observer2); // child subscription

setTimeout(() => {
    // observer.unsubscribe();
    var observer2 = observable.subscribe(
        (x: any) => addItem("Subscriber2" + x)
    ); // in this code what happens is it emits all the data from the first observer
}, 1000);

function addItem(val: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}