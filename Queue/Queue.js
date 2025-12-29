class Queue{
    constructor(){
        this.queue=[];
    }

    enqueue(elem){
        this.queue.push(elem);
    }

    dequeue(){
        if(this.isEmpty())
        {
            return "Underflow";
        }

       return this.queue.shift();
    }
    peek(){
        return this.queue[0];
    }
    isEmpty(){
        return this.size()===0;
    }
    size()
    {
        return this.queue.length;
    }
    display(){
        let ans="";
        for(let i=0;i<this.size();i++)
        {
            ans+=this.queue[i]+" ";
        }
        console.log(ans);
    }
}

const myQueue=new Queue();

myQueue.enqueue(34);
myQueue.enqueue(25);
myQueue.enqueue(36);
myQueue.enqueue(55);
myQueue.display();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty());
console.log(myQueue.size());