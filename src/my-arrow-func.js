import console from './fake-console';

const f1 = a=>a*a;
const f2 = (a=7)=>a*a;

const obj = {
    v: this,  // this 為 undefined
    f3: ()=> this,  // this 為 undefined
    f4: function (){
        return this;
    },
    f5(){
        return this;
    }
}
console.log(f1(8), f2());
console.log(typeof obj.f3(), typeof obj.f4(), typeof obj.f5());
console.log(typeof obj.v);
