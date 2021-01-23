let example = "Example String!";
let ourSubstring = "Example";

// conditional comparing if a substring is
if (example.includes(ourSubstring)) {
    console.log("The word Example is in the string.");
} else {
    console.log("The word Example is not in the string.");
}

var arr = [
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
var documents = ['A statistical way of comparing two (or more) techniques, typically an incumbent against a new rival. A/B testing aims to determine not only which technique performs better but also to understand whether the difference is statistically significant. A/B testing usually considers only two techniques using one measurement, but it can be applied to any finite number of techniques and measures. The fraction of predictions that a classification model got right. In multi-class classification, accuracy is defined as follows: In binary classification, accuracy has the following definition: See true positive and true negative.', `In reinforcement learning, the mechanism by which the agent transitions between states of the environment. The agent chooses the action by using a policy.`,`A function (for example, ReLU or sigmoid) that takes in the weighted sum of all of the inputs from the previous layer and then generates and passes an output value (typically nonlinear) to the next layer.`]
var _document = documents[0].replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")


function checker(value) {
    console.log(value);
    console.log(_document[0]);
    console.log(_document[0].includes(value));
}

arr = arr.filter(checker);
console.log(arr);

// order in order of sentence
// map words to sentence
var dict = {
    keywordphrase: "Chris",
    order: 1,
    firstuse: "some value"
};
var thesaurus = [dict,dict]
console.log(thesaurus)

var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}

const array = ["one", "two", "three"]
array.forEach(function (item, index) {
    console.log(item, index);
});

let colors = ['red', 'green', 'blue'];
for (const color of colors){
    console.log(color);
}

Array.prototype.foo = "foo!";
var array2 = ['a', 'b', 'c'];

for (var i in array2) {
    console.log(array2[i]);
}

var obj = {
    "a": 1,
    "b": 2,
    "c": 3
};

for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
        console.log("prop: " + prop + " value: " + obj[prop])
    }
}