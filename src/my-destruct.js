import console from './fake-console';

const data = {
    name: 'Shinder',
    age: 28,
    gender: 'male'
};
let {name, gender, age, title} = data;  // 解構設定
console.log(name, gender, age, title);
let {name: nickname, age: myAge} = data;  // 解構設定
console.log(nickname, myAge);
data.age ++;
({name, gender, age} = data);  // 設定給既有的變數
console.log(name, gender, age);

let data2 = {
    ...data,  // 解構
    title: 'developer'
};
console.log(JSON.stringify(data2));

const ar = [3, 5, 8];
let [d, e, f] = ar;
const [g, h] = ar;
console.log(d, e, f);
console.log(g , h);

[d, e, f] = [7, 88, 999];
console.log(d, e, f);

const ar2 = [2, ...ar, 9];
console.log(JSON.stringify(ar2));
