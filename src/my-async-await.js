import console from './fake-console';

import "@babel/polyfill";  // 轉譯 async/await 時需要用到
const myFunc = (msec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(Math.floor(Math.random()*100));
        }, msec);
    });
};

(async ()=>{
    const r1 = await myFunc(1300);
    console.log(r1);
    const r2 = await myFunc(1400);
    console.log(r2);
    const r3 = await myFunc(1200);
    console.log(r3);
})();
