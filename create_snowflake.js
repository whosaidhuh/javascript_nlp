var vfile = require('to-vfile')
var retext = require('retext')
var pos = require('retext-pos')
var keywords = require('retext-keywords')
var toString = require('nlcst-to-string')
var documents = ['A statistical way of comparing two (or more) techniques, ' +
'typically an incumbent against a new rival. ' +
'A/B testing aims to determine not only which technique' +
' performs better but also to understand whether the difference ' +
'is statistically significant. A/B testing usually ' +
'considers only two techniques using one measurement, ' +
'but it can be applied to any finite number of techniques ' +
'and measures. The fraction of predictions that a' +
'classification model got right. In multi-class classification, ' +
'accuracy is defined as follows: In binary classification, ' +
'accuracy has the following definition: See true positive ' +
'and true negative.', `In reinforcement learning, the mechanism by
                     which the agent transitions between states of the environment. 
                     The agent chooses the action by using a policy.`,`A function 
                     (for example, ReLU or sigmoid) that takes in the weighted sum of 
                     all of the inputs from the previous layer and then generates 
                     and passes an output value (typically nonlinear) to the next layer.`]
definition = documents[0]
definition_array = documents[0].replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
var _keywords = new Array();
var _keyphrases = new Array();

//console.log("Keyphrasewords Topic Extraction Using Keyword_Extractor + Retext-Keywords")
var keyword_extractor = require("keyword-extractor");
var extraction_result = keyword_extractor.extract(definition,{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: false,
    return_chained_words:true,
    return_max_ngrams: 2

});

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
function done(err, file) {
    if (err) throw err
    file.data.keywords.forEach(function(keyword) {
        _keywords.push(toString(keyword.matches[0].node))
    })

    file.data.keyphrases.forEach(function(phrase) {
        _keyphrases.push(phrase.matches[0].nodes.map(stringify).join(''))
        function stringify(value) {
            return toString(value)
        }
    })
}

retext()
    .use(pos) // Make sure to use `retext-pos` before `retext-keywords`.
    .use(keywords)
    .process(documents[0], done)

let filtered_words = []
function contains_words(value) {
    if (value.split(" ").length>1) {
        filtered_words.push(value)
    } else {}
}
extraction_result.filter(contains_words);
kephrasewords = removeDuplicates(filtered_words.concat(_keywords.concat(_keyphrases)));
//console.log("Definition: "+ definition);
//console.log("Keyphrasewords: " + kephrasewords);
//console.log("\npair keyword with sentnence")
// build dictionary
// for phrase in keyphrasewords
// use phrase as key and sentence as value
// returns dictionary with keyphrasewords mapped to sentences
var keyphrasewords_dict = {};
//console.log(definition_array)
for(var j in definition_array) {
    for (var i in kephrasewords) {
        if (definition_array[j].includes(kephrasewords[i])) {
            keyphrasewords_dict[kephrasewords[i]] = definition_array[j];
        } else {
        }
    }
    ;
}
//console.log(keyphrasewords_dict)
console.log("\nfirst snowflake")
// loop through definition
// per sentence keywords followed by sentence
// append defintion
// concat results with result.reverse
// boom first fingerprint
var fingerprint_array = [];
for (var j in definition_array ) {
    // console.log(definition_array[j])
    var _kwords = [];
    for (var i in kephrasewords) {
        // all keywords in sentence
        if (definition_array[j].includes(kephrasewords[i])) {
            _kwords.push(kephrasewords[i])
            //fingerprint_array.push(kephrasewords[j]);
        } else {
        }
        // sentence
        //fingerprint_array.push(definition_array[i]);
    }
    _kwords = removeDuplicates(_kwords);
    //console.log(_kwords)
    for (k in _kwords) {
        fingerprint_array.push(_kwords[k])
    }
    fingerprint_array.push(definition_array[j])
}
fingerprint_array.push(definition)
//console.log(fingerprint_array)
//console.log(fingerprint_array.reverse())
//console.log(fingerprint_array);
fingerprint_array_reverse = [... fingerprint_array].reverse()
final_fingerprint = fingerprint_array.concat(fingerprint_array_reverse).join(' ')
console.log(final_fingerprint)
//console.log("\nUI functionality")
//console.log("\nadd button to display whole definition")
//console.log("\nadd button to display key words")
//console.log("\nafter snowflake quizlet notecard scrape")
