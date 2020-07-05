import console from './fake-console';

new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve('Hello');
        // reject('bad');
    }, Math.random()*1000);
})
    .then(result=>{
        console.log(`result: ${result}`);
        return 'hi';
    })
    .then(a=>{
        // throw new Error('abc');
        console.log(`a: ${a}`);
    })
    .catch(ex=>{
        console.log(`ex: ${ex.toString()}`);
    })
    .then(b=>{
        console.log(`b: ${b}`);
    })