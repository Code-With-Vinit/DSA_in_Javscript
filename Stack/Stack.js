class Stack{
    constructor(){
        this.stack=[];
    }
    push(element){
        this.stack.push(element);
    }
    pop(){
        if(this.isEmpty())
        {
            return "Stack is empty.Can't perform pop at this point";
        }
        return this.stack.pop();
    }

    isEmpty(){
        return this.size()==0;
    }
    peek(){
        if(this.isEmpty())
        {
            return "No element to display. Stack is empty";
        }
        return this.stack[this.size()-1];
    }
    size(){
        return this.stack.length;
    }
    display()
    {
        for(let i=0;i<this.size();i++)
        {
            console.log(this.stack[i]+" ");
        }
    }
}

const stack1=new Stack();
stack1.push(10);
stack1.push(20);
stack1.push(30);

stack1.display();
console.log(stack1.peek());
stack1.pop();
stack1.pop();
stack1.pop();
console.log(stack1.isEmpty());
stack1.display();
stack1.push(30);
console.log(stack1.size());


