import console from './fake-console';

const ar = [ 1, '2', 3, 4, 5, '6', '7', 8];

const ar2 = ar.filter((el, index, array)=> typeof el==='number');
console.log('ar2:', ar2.toString());

const ar3 = ar.map(el=> el * el);
console.log('ar3:', ar3.toString());

const ar4 = ar.reduce((previousValue, currentValue, index) => {
    console.log(previousValue, currentValue, index);
    return previousValue*1 + currentValue*1;
})
console.log('ar4:', ar4.toString(), typeof ar4);
