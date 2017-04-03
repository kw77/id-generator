# id-generator
A node module to create IDs in a particular letter/number format (random or predetermined)

This is a simple module for creating IDs of a particular letter/number sequence but, importantly, with the ability to have a predetermined seeded random set of IDs. This is intended for testing a student database application where student IDs are in the format LLNNNNNN (initials and student number). I'll try to make the generator more generic in due course (allowing other combinations for more reuse).

Output can either be in flat strings or as objects. Objects will also contain class information, in the format NNL (e.g. 03B), again 
predetermined in a fashion linked to the id. Full info is useful when pre-populating test databases, etc... single strings when generating 
test requests.

Example code, with flat string-based output:

```javascript
const IdGenerator = require('./index.js');

let generator = new IdGenerator(10,1);

console.log( 'Random ID:      ' + generator.randomId() );
console.log( 'Random IDs:     ' + generator.randomIds(3) );
console.log( 'Random Pred:    ' + generator.randomPredeterminedId() );
console.log( 'Random Preds:   ' + generator.randomPredeterminedIds(3) );
console.log( 'List Pred IDs:  ' + generator.listPredeterminedIds() );
console.log( 'Specific Pred:  ' + generator.predeterminedId(0) );
console.log( 'Chance pred ID: ' + generator.chancePredeterminedId(0.5) );
```

Output:

```bash
Random ID:      PV231787
Random IDs:     DO844106,HC558086,CG798286
Random Pred:    CT788891
Random Preds:   CT788891,GC582466,KW184852                                                                                                         
List Pred IDs:  CB709848,GR974268,PO200080,XY975046,JP757253,AH845018,EX865987,GC582466,KW184852,CT788891                                          
Specific Pred:  CB709848                                                                                                                           
Chance pred ID: PO200080
```

Example code, with object-based output:

```javascript
let generator2 = new IdGenerator(4,1,true);

console.log( 'Random ID:      ' + JSON.stringify(generator2.randomId() ) );
console.log( 'Random IDs:     ' + JSON.stringify(generator2.randomIds(3) ) );
console.log( 'Random Pred:    ' + JSON.stringify(generator2.randomPredeterminedId() ) );
console.log( 'Random Preds:   ' + JSON.stringify(generator2.randomPredeterminedIds(3) ) );
console.log( 'List Pred IDs:  ' + JSON.stringify(generator2.listPredeterminedIds() ) );
console.log( 'Specific Pred:  ' + JSON.stringify(generator2.predeterminedId(0) ) );
console.log( 'Chance pred ID: ' + JSON.stringify(generator2.chancePredeterminedId(0.5) ) );
console.log( 'Chance pred Ob: ' + JSON.stringify(generator2.chancePredeterminedId(0.5, true) ) );

```

Output:

```bash
Random ID:     {"id":"FE281441","class":"05V"}
Random IDs:    [{"id":"UL279572","class":"04S"},{"id":"KW142570","class":"04T"},{"id":"TM651699","class":"01E"}]
Random Pred:   {"id":"GR974268","class":"04U"}
Random Preds:  [{"id":"GR974268","class":"04U"},{"id":"GR974268","class":"04U"},{"id":"GR974268","class":"04U"}]
List Pred IDs: [{"id":"CB709848","class":"01B"},{"id":"GR974268","class":"04U"},{"id":"PO200080","class":"04U"},{"id":"XY975046","class":"05Y"}]
Specific Pred:  {"id":"CB709848","class":"01B"}
Chance pred ID: {"id":"JK559993","class":"02H","predetermined":false}
Chance pred Ob: {"id":"CB709848","class":"01B","predetermined":true}
```
