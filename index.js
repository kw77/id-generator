var randomBetween = function (a, b, seed) {
    var random;

    if(seed){
        var pseudoRandom = Math.sin(seed) * 10000;
        random = pseudoRandom - Math.floor(pseudoRandom);
    } else {
        random = Math.random();
    }

    return Math.floor(random * (b - a + 1) + a);
};

var randomRange = (26 * 26 * 1000000) - 1; // 2 letters + a 6 digit number (000000-999999)
var predeterminedRange = 4; // 1-100,000 - validate in class constructor method
var predeterminedSeed  = 1;

var generateId = function(randomSeed){
    var overallRandom = randomBetween(0,randomRange,randomSeed); // generate random in range, seeded as needed

    var lettersRand   = overallRandom % (26 * 26);            // Get the part of the overall random for the two letters (modulus part)
    var letter1Num    = Math.floor(lettersRand / 26);         // Get the number for the first letter (divisor part)
    var letter1Str    = String.fromCharCode(65 + letter1Num); // Get ASCII capital letter from first number
    var letter2Num    = lettersRand % 26;                     // Get the number for the second letter (modulus part)
    var letter2Str    = String.fromCharCode(65 + letter2Num); // Get ASCII capital letter for second number
    var numberRand    = Math.floor(overallRandom / (26 * 26));// Get the part of the overall random for the number
    var numberZeroPad = '000000' + numberRand.toString();     // String representation of number part, zero padded
    var numberStr     = numberZeroPad.substr(numberZeroPad.length - 6); // Get last 6 characters, trimming the zero padded string
    var id            = letter1Str + letter2Str + numberStr;  // Concatenate to get full id desired

    return id;
};

var randomIds = function(count){
    var Ids = [];

    if(count && Number.isInteger(count)){
        for(let i = 0; i < count; i++){
            Ids.push(randomId());
        }
    }

    return Ids;
};

var randomId = function(){
    return generateId();
};

var randomPredeterminedId = function(){
    var id;
    var seed = randomBetween(predeterminedSeed, predeterminedSeed + (predeterminedRange - 1));
    id = generateId(seed);
    return id;
};

var randomPredeterminedIds = function(count){
    var Ids = [];

    if(count && Number.isInteger(count)){
        for(let i = 0; i < count; i++){
            Ids.push(randomPredeterminedId());
        }
    }

    return Ids;
};

var listPredeterminedIds = function(){
    var Ids = [];

    for(let i = predeterminedSeed; i < (predeterminedSeed + predeterminedRange); i++){
        Ids.push(generateId(i));
    }

    return Ids;
};

var predeterminedId = function(sequenceNumber){
    var id;

    if(Number.isInteger(sequenceNumber) && sequenceNumber >= 0 && sequenceNumber <= (predeterminedRange - 1)){
        id = generateId(predeterminedSeed + sequenceNumber);
    }
    return id;
};

var chancePredeterminedId = function(chance){
    // percent = chance of getting a predetemined id (0-1)
    var result = {};
    var random = Math.random();

    if(chance < random){
        result.id = randomPredeterminedId();
        result.predetermined = true;
    } else {
        result.id = randomId();
        result.predetermine = false;
    }

    return result;
};

console.log(randomId());
console.log(randomIds(3));
console.log(randomPredeterminedId());
console.log(randomPredeterminedIds(3));
console.log(listPredeterminedIds());
console.log(predeterminedId(0));
console.log(chancePredeterminedId(0.5));

// id generator
 // - predetermined range
 // - predetermined seed
 // + get random id                             // rtn string
 // + get random ids(1-*)                       // rtn array
 // + get random predetermined id               // rtn string
 // + get random predetermined ids(1-*)         // rtn array
 // + get predetermined id list                 // rtn array (all)
// + get chance of predetermined(0-100 for pre)// rtn string
 // + get predetermined id(1-range)             // rtn string
