// this could work for finding keywords across all notecards
const { EnglishTokenizer, KeywordExtractor } = require("@agtabesh/keyword-extractor")
const documents = ['A statistical way of comparing two (or more) techniques, typically an incumbent against a new rival. A/B testing aims to determine not only which technique performs better but also to understand whether the difference is statistically significant. A/B testing usually considers only two techniques using one measurement, but it can be applied to any finite number of techniques and measures. The fraction of predictions that a classification model got right. In multi-class classification, accuracy is defined as follows: In binary classification, accuracy has the following definition: See true positive and true negative.', `In reinforcement learning, the mechanism by which the agent transitions between states of the environment. The agent chooses the action by using a policy.`,`A function (for example, ReLU or sigmoid) that takes in the weighted sum of all of the inputs from the previous layer and then generates and passes an output value (typically nonlinear) to the next layer.`]

const tokenizer = new EnglishTokenizer()
const keywordExtractor = new KeywordExtractor()
keywordExtractor.setTokenizer(tokenizer)

documents.forEach((text, i) => {
    keywordExtractor.addDocument(i, text)
})

const randomDocument = documents[Math.floor(Math.random() * documents.length)]
const keywords = keywordExtractor.extractKeywords(randomDocument, {
    sortByScore: true,
    limit: 10
})

console.log(keywords)

//  include the Keyword Extractor
var keyword_extractor = require("keyword-extractor");

//  Extract the keywords
var extraction_result = keyword_extractor.extract(documents[0],{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: false,
    return_chained_words:false,
    return_max_ngrams: 2

});

console.log(extraction_result)

//  Extract the keywords
var extraction_result = keyword_extractor.extract(documents[0],{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: false,
    return_chained_words:true,
    return_max_ngrams: 2

});

console.log(extraction_result)
// pair keyword with some context(few words before and after)
// pair keyword with sentnence
// order keywords based on definition
// first snowflake
// keep bi-grams and larget from extract_results
// make whole list mixing extract_results and retext-keywords
// order array with order from original text
// reverse and concat the array so it smooths in then out
// reverse in and out with sentences from keywordphrases
// append main text and voila first snowflake!
// build function to create snowflake

//UI functionality
//// add button to display whole definition
//// add button to display key words

//after snowflake quizlet notecard scrape
