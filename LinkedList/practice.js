class Node{
    constructor(data,next=null){
        this.data = data;
        this.next=next;
    }
}



class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }


    //?Insert first Node
    insertFirst(data){ 
        this.head = new Node(data,this.head) 
    }

    //?Insert Last Node 
    insertLast(data){ 
        let node = new Node(data)
        let current;
        
        //if empty,make head
        if(!this.head){
            this.head = node
        }else{
            current = this.head

            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }


    //?Insert at Index


    //?Get at index

    //?Remove at index

    //?Clear List

    //?Print List data
    printListData(){
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
            
        }
    }
}

let ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)

ll.printListData()



console.log(ll);