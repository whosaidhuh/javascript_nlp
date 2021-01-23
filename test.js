// https://medium.com/better-programming/natural-language-processing-with-node-js-afb62729c1a2let message = "Javascript in Google Colab? Awesome!"
// tokenizer
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
// console.log(tokenizer.tokenize('Machine learning is awesome!'));

// string distance
//console.log(natural.HammingDistance('AI', 'ai', false));
//console.log(natural.HammingDistance('AI', 'ai', true));
//console.log(natural.HammingDistance('AI', 'artificial intelligence', true));


// stemmer
natural.PorterStemmer.attach();
const sentence = 'A process for removing the commoner morphological and inflexional endings from words in English.';
//console.log(sentence.tokenizeAndStem());

// https://www.npmjs.com/package/node-rake
// rake
const documentss = ['A statistical way of comparing two (or more) techniques, typically an incumbent against a new rival. A/B testing aims to determine not only which technique performs better but also to understand whether the difference is statistically significant. A/B testing usually considers only two techniques using one measurement, but it can be applied to any finite number of techniques and measures. The fraction of predictions that a classification model got right. In multi-class classification, accuracy is defined as follows: In binary classification, accuracy has the following definition: See true positive and true negative.', `In reinforcement learning, the mechanism by which the agent transitions between states of the environment. The agent chooses the action by using a policy.`,`A function (for example, ReLU or sigmoid) that takes in the weighted sum of all of the inputs from the previous layer and then generates and passes an output value (typically nonlinear) to the next layer.`]

const rake = require('node-rake')
const myStopwords = ['for', 'the', 'a', 'stands', 'test', 'man', 'woman'];
const opts = {stopwords: myStopwords};
// console.log(opts)
const keyWords = rake.generate(documentss[0], opts);
// it'll output: [ 'Latent Dirichlet Allocation', 'LDA' ]
console.log('rake')

console.log(keyWords)


// https://github.com/retextjs/retext-keywords
// must install all dependencies

var vfile = require('to-vfile')
var retext = require('retext')
var pos = require('retext-pos')
var keywords = require('retext-keywords')
var toString = require('nlcst-to-string')

retext()
    .use(pos) // Make sure to use `retext-pos` before `retext-keywords`.
    .use(keywords)
    .process(vfile.readSync('example.txt'), done)

function done(err, file) {
    if (err) throw err

    console.log('Keywords:')
    file.data.keywords.forEach(function(keyword) {
        console.log(toString(keyword.matches[0].node))
    })

    console.log()
    console.log('Key-phrases:')
    file.data.keyphrases.forEach(function(phrase) {
        console.log(phrase.matches[0].nodes.map(stringify).join(''))
        function stringify(value) {
            return toString(value)
        }
    })
}

// https://github.com/primaryobjects/lda
var lda = require('lda');
// Example document.
var text = 'Cats are small. Dogs are big. Cats like to chase mice. Dogs like to eat bones.';
console.log(text)
// Extract sentences.
var documents = text.match( /[^\.!\?]+[\.!\?]+/g );
console.log(documents)

// Run LDA to get terms for 2 topics (5 terms each).
var result = lda(documents, 2, 5);
console.log(result)


//The result can be traversed as follows:
var result = lda(documents, 2, 5);

// For each topic.
for (var i in result) {
    var row = result[i];
    console.log('Topic ' + (parseInt(i) + 1));

    // For each term.
    for (var j in row) {
        var term = row[j];
        console.log(term.term + ' (' + term.probability + '%)');
    }

    console.log('');
}

// Use the random seed 123.
result = lda(documents, 2, 5, null, null, null, 123);
console.log(result)

// https://blog.logrocket.com/natural-language-processing-for-node-js/
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");

// getSentiment expects an array of strings
console.log(analyzer.getSentiment(["I", "don't", "want", "to", "play", "with", "you"]));

// phonetic matching
var metaphone = natural.Metaphone;
var soundEx = natural.SoundEx;

var wordA = 'phonetics';
var wordB = 'fonetix';

if (metaphone.compare(wordA, wordB))
    console.log('They sound alike!');

// We can also obtain the raw phonetics of a word using process()
console.log(metaphone.process('phonetics'));