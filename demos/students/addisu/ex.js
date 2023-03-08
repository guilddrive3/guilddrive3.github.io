function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
    father: man,
    mother: woman
    }}
    let family = marry({ name: "John",age:20,work:"It"},
    { name: "Ann"});
    delete family.father
    ;
    delete family.mother.husband
    ;
    let user = {
        name: "John",
        age: 30,
        sayHi: function() {
        // "this" is the "current object"
        console.log(this.name);
        }
        };