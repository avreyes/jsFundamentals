//! Var vs Let
/*
    Introduced in ES6, we have 3 keywords for variables:
        - var
        - let
        - const

    Var & let: operate the same but behave differently
    const: cannot be re-expressed. 

        - var is scoped to the nearest function block
        - let is scoped to the nearest enclosing block
*/

//* Var
// var x = 12;
let x = 12;

function varTest() {
    // var x = 33;
    let x = 33;
    if(1 == 1) {
        // var x = 45;
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);

// * ********************
// * Let
let z = 12;

function letTest() {

    let z = 33;
    if(1 == 1) {

        let z = 45;
        console.log(z);
    }
    console.log(z);
}

letTest();
console.log(z);

//* ***********************

//* Const

function constTest() {
    const scope = 1;

    if(true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();