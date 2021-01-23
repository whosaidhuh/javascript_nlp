// this could work for finding keywords across all notecards
const { EnglishTokenizer, KeywordExtractor } = require("@agtabesh/keyword-extractor")
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
console.log("keyword_extractor")
var keyword_extractor = require("keyword-extractor");
var extraction_result = keyword_extractor.extract(definition,{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: false,
    return_chained_words:true,
    return_max_ngrams: 2

});
console.log("\npair keyword with some context(few words before and after)")
console.log("\npair keyword with sentnence")
console.log("\norder keywords based on definition")
console.log("\nfirst snowflake")
console.log("\nkeep bi-grams and larget from extract_results")
let filtered_words = []

function contains_words(value) {
    if (value.split(" ").length>1) {
        filtered_words.push(value)
    } else {}
}
extraction_result.filter(contains_words);
console.log(definition);
console.log(filtered_words);
console.log("\nmake whole list mixing extract_results and retext-keywords")
console.log("\norder array with order from original text")
console.log("\nreverse and concat the array so it smooths in then out")
console.log("\nreverse in and out with sentences from keywordphrases")
console.log("\nappend main text and voila first snowflake!")
console.log("\nbuild function to create snowflake")
console.log("\nUI functionality")
console.log("\nadd button to display whole definition")
console.log("\nadd button to display key words")
console.log("\nafter snowflake quizlet notecard scrape")
