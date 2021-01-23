// https://github.com/retextjs/retext-keywords
var vfile = require('to-vfile')
var retext = require('retext')
var pos = require('retext-pos')
var keywords = require('retext-keywords')
var toString = require('nlcst-to-string')
var _keywords = new Array();
var _keyphrases = new Array();
const documents = ['A statistical way of comparing two (or more) techniques, typically an incumbent against a new rival. A/B testing aims to determine not only which technique performs better but also to understand whether the difference is statistically significant. A/B testing usually considers only two techniques using one measurement, but it can be applied to any finite number of techniques and measures. The fraction of predictions that a classification model got right. In multi-class classification, accuracy is defined as follows: In binary classification, accuracy has the following definition: See true positive and true negative.', `In reinforcement learning, the mechanism by which the agent transitions between states of the environment. The agent chooses the action by using a policy.`,`A function (for example, ReLU or sigmoid) that takes in the weighted sum of all of the inputs from the previous layer and then generates and passes an output value (typically nonlinear) to the next layer.`]

retext()
    .use(pos) // Make sure to use `retext-pos` before `retext-keywords`.
    .use(keywords)
    .process(documents[0], done)

console.log('Keyphrasewords:')
console.log(removeDuplicates(_keywords.concat(_keyphrases)))

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
