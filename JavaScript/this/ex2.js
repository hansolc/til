function CreateFunc(value){
    this.value = value;
    this.foo = function(){
        console.log('method: ', this);  //{value: value, bar: [func]}
        function bar(){
            console.log('nested func: ', this); //global
        }
        bar();
    }
}

// const test = new CreateFunc(10);
// test.foo();

function bindFunction(value){
    this.value = value;
    this.foo = function(){
        console.log('method: ', this);  //{value: value, foo: [func]}
        // const that = this;
        // or

        const bar = () => {
            console.log('nested: ', this);
        }
        bar()
    }
}

// const test2 = new bindFunction(10);
// test2.foo();