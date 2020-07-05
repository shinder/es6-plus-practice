import console from './fake-console';

import {ar2 as array2} from './my-export02';
import {ar2 as array3} from './my-export02';

console.log(JSON.stringify(array2));
console.log(array2===array3);
