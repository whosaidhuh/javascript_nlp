console.log("code: conditional comparing if a substring is in string");
let example = "Example String!";
let ourSubstring = "Example";
if (example.includes(ourSubstring)) {
    console.log("The substring:" + ourSubstring + " is in " + example+ "\n");
} else {}

console.log("code: uses filter to apply function that searches which words are in the sentence");
var words = [
    'techniques',
    'classification',
    'two',
    'A/B',
    'measurement',
    'accuracy',
    'two techniques',
    'classification model',
    'multi-class classification'
];
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
var _document = documents[0].replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
var sentence = _document[0]
let filtered_words = []

function contains_words(value) {
    if (sentence.includes(value)) {
        filtered_words.push(value)
    } else {}
    return filtered_words
}
words.filter(contains_words);
console.log(sentence);
console.log(words);
console.log(filtered_words+"\n");

console.log("code: array of dictionaries");
var dict = {
    keywordphrase: "Chris",
    order: 1,
    firstuse: "some value"
};
var thesaurus = [dict,dict]
console.log(thesaurus)
console.log("\n")

console.log("code: for loops that accesses each element")
let colors = ['red', 'green', 'blue'];
var arrayLength = colors.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(colors[i]);
    //Do something
}
for (const color of colors){
    console.log(color);
}
console.log("\n")

console.log("code: for loop that accesses each element and index")
colors.forEach(function (item, index) {
    console.log(item, index);
});

for (var i in colors) {
    console.log(colors[i]);
}
