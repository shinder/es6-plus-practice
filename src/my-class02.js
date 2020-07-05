import console from './fake-console';

import Person from './my-class01';

export default class Employee extends Person {
    // 建構函式
    constructor(name='unkown', age=NaN, gender='unkown') {
        super(name, age, gender);  // 呼叫父類別的建構函式
        this._employeeId = '';
    }
    toString() {
        return `${this.name} - ${this.age} - ${this.gender} - ${this._employeeId}`;
    }
    get employeeId(){
        return this._employeeId;
    }
    set employeeId(v){
        this._employeeId = v;
    }
}
const p3 = new Employee('Bill', 28, 'male');
p3.employeeId = 'C006';
console.log(p3);

