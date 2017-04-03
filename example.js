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


