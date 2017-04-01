const IdGenerator = require('./index.js');

let generator = new IdGenerator(10,1);

console.log( 'Random ID: ' + generator.randomId() );
console.log( 'Random IDs: ' + generator.randomIds(3) );
console.log( 'Random Pred: ' + generator.randomPredeterminedId() );
console.log( 'Random Preds: ' + generator.randomPredeterminedIds(3) );
console.log( 'List Pred IDs: ' + generator.listPredeterminedIds() );
console.log( 'Specific Pred: ' + generator.predeterminedId(0) );
console.log( 'Chance pred ID: ' + generator.chancePredeterminedId(0.5) );
console.log( 'Chance pred Ob: ' + JSON.stringify(generator.chancePredeterminedId(0.5, true)) );
