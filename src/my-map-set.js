import console from './fake-console';

const map = new Map;
const obj = {};

map.set({}, {a:1, b:2});
map.set({}, {a:3, b:4});
map.set(obj, {a:5, b:6});
map.set(obj, {a:7, b:8});  // obj 的 reference 同一個
map.forEach((v,k)=>{
    console.log( JSON.stringify(k) + ' ::: ' + JSON.stringify(v) );
});
console.log( map.size );
console.log( '---' );

const set = new Set;

set.add({a:1, b:2}).add({a:1, b:2});
set.add(obj).add(obj).add({a:1, b:2});
set.forEach(v=>{
    console.log(JSON.stringify(v));
});
console.log( set.size );
set.delete(obj);
console.log('刪除 obj 之後：', set.size );
set.clear();
console.log('清空之後：', set.size );

