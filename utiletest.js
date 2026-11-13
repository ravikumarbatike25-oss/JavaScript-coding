// IMP: Default import has NO curly braces. Named imports NEED curly braces.
// import Employee from "./utiles.js"           --> default (any name is OK)
// import { qa, dev, manager } from "./utiles.js" --> named (name must match)
// import Employee, { qa } from "./utiles.js"    --> both in one line (default first)

import { user, qa, dev, manager }  from "./utiles.js";
import Employee from "./utiles.js";
import {add} from "./utiles.js"; 
//import all the exports from the utiles.js file
//Instead of importing default and named exports separately , this is a better way to import all the exports from the utiles.js file using * as any name ex: all, utiles, rk,user..etc
import * as all from "./utiles.js";
  
//by using all
 console.log(all.qa());
 console.log(all.dev());
 console.log(all.manager());
 console.log(all.user);

console.log(user);
console.log(qa());
console.log(dev());
console.log(manager()); 
console.log(Employee());
console.log(add(1,2));