function Node() {

    let data;
    let prevNode = null;//if its null = head
    let nextNode = null;//if its null = tail
    return {
        data,
        prevNode,
        nextNode
    }
}

function DoubleLinkedList() {

    let head;
    let tail;

    function addNodeAtStart(data) {//Done!

        const newNode = new Node();

        newNode.data = data;

        if (head !== undefined) {
            let tempHead = head;
            head.prevNode = newNode;
            head = newNode;
            head.nextNode = tempHead;
        }
        else {
            head = newNode;
            tail = newNode;
        }

        return newNode;
    }

    function addNodeAtEnd(data) {

        const newNode = new Node();

        newNode.data = data;

        if (tail !== undefined) {
            let tempTail = tail;
            tail.nextNode = newNode;
            tail = newNode;
            tail.prevNode = tempTail;
        }
        else {
            tail = newNode;
            head = newNode;
        }

        return newNode;
    }

    function addNodeBefore(data, nextNode) {

        if (head === undefined) {
            console.log("Empty List, Can't add node before empty list");
            return;
        }

        let currNode = tail;

        while (currNode !== nextNode) {
            if (currNode === head) {
                console.log("Selected node does not exist")
                return;
            }
            currNode = currNode.prevNode;
        }
        const newNode = new Node();

        newNode.data = data;

        newNode.nextNode = nextNode;
        newNode.prevNode = nextNode.prevNode;
        nextNode.prevNode = newNode;

        if (head === nextNode) {
            head = newNode;
        }
        else {
            newNode.prevNode.nextNode = newNode;
        }

        return newNode;
    }

    function addNodeAfter(data, prevNode) {

        if (head === undefined) {
            console.log("Empty List, can't add node after an empty list");
            return;
        }

        let currNode = head;

        while (currNode !== prevNode) {
            if (currNode === tail) {
                console.log("Selected node does not exist");
                return;
            }
            currNode = currNode.nextNode;
        }

        const newNode = new Node();
        newNode.data = data;

        newNode.prevNode = prevNode;
        newNode.nextNode = prevNode.nextNode;
        prevNode.nextNode = newNode;

        if (tail === prevNode) {
            tail = newNode;
        }
        else {
            newNode.nextNode.prevNode = newNode;
        }

        return newNode;
    }

    function removeNodeAtStart() {
        if (head !== undefined) {
            if(head===tail){
                head = undefined;
                tail = undefined;
                return;
            }
            head = head.nextNode;
            head.prevNode = null;
        }
    }

    function removeNodeAtEnd() {
        if (tail !== undefined) {
            if(head===tail){
                head = undefined;
                tail = undefined;
                return;
            }
            tail = tail.prevNode;
            tail.nextNode = null;
        }
    }

    function removeNode(node) {

        if (head === undefined) {
            return;
        }
        let currNode = tail;

        while (currNode !== node) {
            if (currNode === head) {
                return;
            }
            currNode = currNode.prevNode;
        }

        if (currNode === head) {
            removeNodeAtStart();
            return;
        }

        if (currNode === tail) {
            removeNodeAtEnd();
            return;
        }

        node.prevNode.nextNode = node.nextNode;
        node.nextNode.prevNode = node.prevNode;

    }

    function readAll() {

        console.log("start Read");

        if (head === undefined) {
            console.log("empty list");
            return;
        }

        let currNode = head;

        while (currNode !== tail) {
            console.log('>> ', currNode.data);
            currNode = currNode.nextNode;
        }
        console.log('>> ', tail.data);

        console.log("Ended Read");

    }

    // function getHead(){
    //     return head;
    // }

    function asArray(){

        const array = [];

        if (head === undefined) {
            console.log("empty list");
            return array;
        }

        let currNode = head;

        while (currNode !== tail) {
            array.push(currNode);
            currNode = currNode.nextNode;
        }
        array.push(currNode);
        return array;
    }

    return {
        addNodeAtStart,
        addNodeAtEnd,
        addNodeAfter,
        addNodeBefore,
        removeNodeAtStart,
        removeNodeAtEnd,
        removeNode,
        readAll,
        //getHead,
        asArray
    }
}

export {DoubleLinkedList}