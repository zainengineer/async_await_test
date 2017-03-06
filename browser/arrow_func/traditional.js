function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 25;

    setInterval(function growUp() {
        // In non-strict mode, the growUp() function defines `this`
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
        console.log(this);
    }, 1000);
}

var p = new Person();
//results person with age 25 (does not change) and this inside refers to window