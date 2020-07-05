import console from './fake-console';

const myTarget = {
    name: 'David',
    age: 24,
    title: 'engineer',
    ageIncrease: function(){ this.age++ }
};
const myHandle = {
    get: function(target, prop){
        return (prop in target) ? target[prop] : '沒有這個屬性!';
    },
    set: function(target, prop, value){
        if(prop==='age' && isNaN(value/1)){
            throw new ReferenceError('年齡必須是數值!');
        }
        target[prop] = value;
        return true;
    }
};
const proxy = new Proxy(myTarget, myHandle);

console.log('name: ' + proxy.name);
console.log('gender: ' + proxy.gender);
proxy.ageIncrease();
try{
    proxy.age = 'peter';
}catch(error){
    console.log( error );
}
console.log( JSON.stringify(proxy) );
