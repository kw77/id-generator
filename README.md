# id-generator
A node module to create IDs in a particular letter/number format (random or predetermined)

This is a simple module for creating IDs of a particular letter/number sequence but, importantly, with the ability to have a predetermined seeded random set of IDs. This is intended for testing a student database application where student IDs are in the format LLNNNNNN (initials and student number). I'll try to make the generator more generic in due course (allowing other combinations for more reuse).

Output can either be in flat strings or as objects. Objects will also contain class information, in the format NNL (e.g. 03B), again 
predetermined in a fashion linked to the id. Full info is useful when pre-populating test databases, etc... single strings when generating 
test requests.

Example code:

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

console.log('------------------------');

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
