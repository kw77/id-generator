class IdGenerator {
    constructor(predeterminedRange = 100,predeterminedSeed = 1){
        this.predeterminedRange = Number.isInteger(predeterminedRange) ? predeterminedRange : 100; // condition ? valTrue : valFalse
        this.predeterminedSeed = Number.isInteger(predeterminedSeed) ? predeterminedSeed : 1;
        this.randomRange = (26 * 26 * 1000000) - 1; // 2 letters + a 6 digit number (000000-999999)
    }

    randomBetween (a, b, seed) {
        // Helper function to return a random number between a and b, with optional seeding
        var random;
        if(seed){
            let pseudoRandom = Math.sin(seed) * 10000;
            random = pseudoRandom - Math.floor(pseudoRandom);
        } else {
            random = Math.random();
        }
        return Math.floor(random * (b - a + 1) + a);
    }

    generateId (randomSeed) {
        // Core function for etting and transforming a random number of all possible combinations to the desired LLNNNNNN format
        let overallRandom = this.randomBetween(0,this.randomRange,randomSeed); // generate random in range, seeded as needed
        let lettersRand   = overallRandom % (26 * 26);            // Get the part of the overall random for the two letters (modulus part)
        let letter1Num    = Math.floor(lettersRand / 26);         // Get the number for the first letter (divisor part)
        let letter1Str    = String.fromCharCode(65 + letter1Num); // Get ASCII capital letter from first number
        let letter2Num    = lettersRand % 26;                     // Get the number for the second letter (modulus part)
        let letter2Str    = String.fromCharCode(65 + letter2Num); // Get ASCII capital letter for second number
        let numberRand    = Math.floor(overallRandom / (26 * 26));// Get the part of the overall random for the number
        let numberZeroPad = '000000' + numberRand.toString();     // String representation of number part, zero padded
        let numberStr     = numberZeroPad.substr(numberZeroPad.length - 6); // Get last 6 characters, trimming the zero padded string
        let id            = letter1Str + letter2Str + numberStr;  // Concatenate to get full id desired
        return id;
    }

    randomId () {
        // Get a random ID (simple passthrough for clean naming), return single string
        return this.generateId();
    }

    randomIds (count) {
        // Get a set of random IDs (as per given count), return array of strings
        var Ids = [];
        if(count && Number.isInteger(count)){
            for(let i = 0; i < count; i++){
                Ids.push(this.randomId());
            }
        }
        return Ids;
    }

    randomPredeterminedId () {
        // Get a random predetermined ID, return a single string
        let id;
        let seed = this.randomBetween(this.predeterminedSeed, this.predeterminedSeed + (this.predeterminedRange - 1));
        id = this.generateId(seed);
        return id;
    }

    randomPredeterminedIds (count) {
        // Get a set of random predetermined IDs (as per given count), return array of strings
        var Ids = [];
        if(count && Number.isInteger(count)){
            for(let i = 0; i < count; i++){
                Ids.push(this.randomPredeterminedId());
            }
        }
        return Ids;
    }

    listPredeterminedIds () {
        // Get a full list of all of the predetermined IDs
        var Ids = [];
        for(let i = this.predeterminedSeed; i < (this.predeterminedSeed + this.predeterminedRange); i++){
            Ids.push(this.generateId(i));
        }
        return Ids;
    }

    predeterminedId (sequenceNumber) {
         // Get a specific predetermined ID based on its sequence number in the seeded range
        var id;
        if(Number.isInteger(sequenceNumber) && sequenceNumber >= 0 && sequenceNumber <= (this.predeterminedRange - 1)){
            id = this.generateId(this.predeterminedSeed + sequenceNumber);
        }
        return id;
    }

    chancePredeterminedId (chance, info) {
        // Get either a random OR predetermined ID, based on the stated chance of geting a predetermined one
        // Input defined as 0-1, output either a single string (info = false) or object (info = true)
        // Object syntax { id : returnId, predetermined : true|false }
        var result = {};
        var random = Math.random();

        if(chance < random){
            result.id = this.randomPredeterminedId();
            result.predetermined = true;
        } else {
            result.id = this.randomId();
            result.predetermine = false;
        }

        if(info){
            return result;
        } else {
            return result.id;
        }
    }
}

module.exports = IdGenerator;


//let generator = new IdGenerator(10,1);
//
//console.log( 'Random ID:      ' + generator.randomId()                 );
//console.log( 'Random IDs:     ' + generator.randomIds(3)               );
//console.log( 'Random Pred:    ' + generator.randomPredeterminedId()    );
//console.log( 'Random Preds:   ' + generator.randomPredeterminedIds(3)  );
//console.log( 'List Pred IDs:  ' + generator.listPredeterminedIds()     );
//console.log( 'Specific Pred:  ' + generator.predeterminedId(0)         );
//console.log( 'Chance pred ID: ' + generator.chancePredeterminedId(0.5) );
//console.log( 'Chance pred Ob: ' + JSON.stringify(generator.chancePredeterminedId(0.5, true)) );
