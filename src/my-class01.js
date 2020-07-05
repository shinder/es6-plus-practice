import console from './fake-console';

class Person {
    // 建構函式
    constructor(name='unkown', age=NaN, gender='unkown') {
        this.name = name; // 設定屬性
        this.age = age;
        this.gender = gender;
    }
    toString() {
        return `${this.name} ${this.age} ${this.gender}`;
    }
}
export default Person;

console.log(new Person);
const p2 = new Person('Flora', 23, 'female');
console.log(p2);
console.log(p2.constructor.name);
