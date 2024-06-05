// THIS - keyword refers to an object that is executing the current piece of code

const student = {
    name : "darshan",
    age : 20,
    eng : 75,
    math : 93,
    phy : 70,
    getAvg() {
        let avg = (this.eng + this.math + this.phy)/3;  
        // let avg = (eng + math + phy)/3;    if we use this code then we will get an error    
        console.log(`${this.name} got average marks = ${avg}`);
        return "";
    }
}
console.log(student.getAvg())

