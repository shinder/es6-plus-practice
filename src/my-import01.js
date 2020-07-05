import console from './fake-console';

import f1 from './my-export01';
import {ar1} from './my-export01';

console.log(f1(3));
console.log(JSON.stringify(ar1));
