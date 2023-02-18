console.log('global: ', this);  //global

const test = {
    value: 10,
    foo() {
      console.log('literal object method: ', this)  //{value: 10, foo: [func]}
    }
}

function createFunc(value){
    this.foo = 5;
    this.bar = function(){
        console.log('constructor func: ', this)     //{foo: 5, bar: [func]}
        return this.foo*5;
    }
}

function generalFunc(){
    console.log('general func: ', this)   //global
}

function strictFunc(){
    'use strict'
    console.log('use strict: ', this)   //undefined
}

test.foo();
const test2 = new createFunc(1);
test2.bar();
generalFunc();
strictFunc();