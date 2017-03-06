function Person(){
    this.age = 25;

    setInterval(() => {
        this.age++; // |this| properly refers to the person object
        console.log(this);
    }, 1000);
}

//keeps incrementing as expected
var p = new Person();