import console from './fake-console';

const myFunc = (msec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(Math.floor(Math.random()*100));
        }, msec);
    });
};

myFunc(1300)
    .then(r=>{
        console.log(r);
        return myFunc(1400);
    })
    .then(r=>{
        console.log(r);
        return myFunc(1200);
    })
    .then(r=>{
        console.log(r);
    })