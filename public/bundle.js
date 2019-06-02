(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

console.log("I'm connected!");

},{}],2:[function(require,module,exports){
"use strict";

var _testArray = _interopRequireDefault(require("./testArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers; // for each question...

    for (var i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = []; // for each available answer to this question...

      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push('<label>' + '<input type="radio" name="question' + i + '" value="' + letter + '">' + letter + ': ' + questions[i].answers[letter] + '</label>');
      } // add this question and its answers to the output


      output.push('<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>');
    } // finally combine our output list into one string of html and put it on the page


    quizContainer.innerHTML = output.join('');
  }

  function showResults(questions, quizContainer, resultsContainer) {} // code will go here
  // show the questions


  showQuestions(_testArray.default, quizContainer); // when user clicks submit, show results

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}

},{"./testArray":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
questions = [{
  id: 1,
  attribute: 'accessible',
  category: 'reflect',
  question: 'I enjoy interacting with others and have a sense of belonging to a group.'
}, {
  id: 2,
  attribute: 'accessible',
  category: 'reject',
  question: 'I just want to be alone and not be bothered by anyone.'
}, {
  id: 3,
  attribute: 'accessible',
  category: 'accept',
  question: 'I desire to be a part of a body of local Christian believers.'
}, {
  id: 4,
  attribute: 'creator',
  category: 'reflect',
  question: 'I enjoy creating something new - music, art, literature, design, machines, crafts, food, photos, children, etc.'
}, {
  id: 5,
  attribute: 'creator',
  category: 'reject',
  question: 'I don\'t see the purpose in living.'
}, {
  id: 6,
  attribute: 'creator',
  category: 'accept',
  question: 'I gain insight and perspective into the world through connection with the One who created me.'
}, {
  id: 7,
  attribute: 'infinite',
  category: 'reflect',
  question: 'I want to make a lasting impact (children, fame, building wing, memorial).'
}, {
  id: 8,
  attribute: 'infinite',
  category: 'reject',
  question: 'This life is all there is.'
}, {
  id: 9,
  attribute: 'infinite',
  category: 'accept',
  question: 'I am investing in eternal things such as loving others and knowing God.'
}, {
  id: 10,
  attribute: 'faithful',
  category: 'reflect',
  question: 'I am truly loyal to a person or organization.'
}, {
  id: 11,
  attribute: 'faithful',
  category: 'reject',
  question: 'I don\'t want to be tied down by anyone or anything.'
}, {
  id: 12,
  attribute: 'faithful',
  category: 'accept',
  question: 'I trust in God and specifically the Bible for direction and truthful understanding of this life.'
}, {
  id: 13,
  attribute: 'glory',
  category: 'reflect',
  question: 'I like others to listen to me and appreciate who I am.'
}, {
  id: 14,
  attribute: 'glory',
  category: 'reject',
  question: 'God does not deserve any more glory than anyone else.'
}, {
  id: 15,
  attribute: 'glory',
  category: 'accept',
  question: 'I make much of God and want to be more like Christ.'
}, {
  id: 16,
  attribute: 'good',
  category: 'reflect',
  question: 'I want to live the \'good life\'.'
}, {
  id: 17,
  attribute: 'good',
  category: 'reject',
  question: 'At times, I just want to be bad.'
}, {
  id: 18,
  attribute: 'good',
  category: 'accept',
  question: 'I define good as whatever comes from God - not just what I want (i.e. what brings us pleasure and comfort).'
}, {
  id: 19,
  attribute: 'grace',
  category: 'reflect',
  question: 'I love giving gifts to people, especially when they are not expecting them.'
}, {
  id: 20,
  attribute: 'grace',
  category: 'reject',
  question: 'I am not wasting my time, money or effort on someone who doesn\'t deserve it.'
}, {
  id: 21,
  attribute: 'grace',
  category: 'accept',
  question: 'I accept God\'s forgiveness of my sins by believing in Jesus Christ and His work on the cross.'
}, {
  id: 22,
  attribute: 'holy',
  category: 'reflect',
  question: 'I consider my \'spiritual\' side when making major decisions.'
}, {
  id: 23,
  attribute: 'holy',
  category: 'reject',
  question: 'I believe my personal freedom is more important that any benefits gained from restrictions imposed by others, including God.'
}, {
  id: 24,
  attribute: 'holy',
  category: 'accept',
  question: 'I see God\'s commands/law as wholly good and thus are for my benefit to pursue and obey.'
}, {
  id: 25,
  attribute: 'humble',
  category: 'reflect',
  question: 'I want to truly know and understand who I am.'
}, {
  id: 26,
  attribute: 'humble',
  category: 'reject',
  question: 'I know that I am better than most people.'
}, {
  id: 27,
  attribute: 'humble',
  category: 'accept',
  question: 'I like who I am - a child of God.'
}, {
  id: 28,
  attribute: 'immutable',
  category: 'reflect',
  question: 'I like my own daily routines and habits (i.e. morning coffee, alone time, my \'to do\' list, etc.).'
}, {
  id: 29,
  attribute: 'immutable',
  category: 'reject',
  question: 'I believe all things change or evolve, including God.'
}, {
  id: 30,
  attribute: 'immutable',
  category: 'accept',
  question: 'I can fully trust God when He makes a promise.'
}, {
  id: 31,
  attribute: 'incomprehensible',
  category: 'reflect',
  question: 'I love exploring the unknown - to try and figure out a mystery or puzzle.'
}, {
  id: 32,
  attribute: 'incomprehensible',
  category: 'reject',
  question: 'I believe that, given enough time and effort, man will collectively understand everything.'
}, {
  id: 33,
  attribute: 'incomprehensible',
  category: 'accept',
  question: 'With what I do know about God, I can trust Him in the things I don\'t fully understand.'
}, {
  id: 34,
  attribute: 'independent',
  category: 'reflect',
  question: 'I like to live as independently as I can.'
}, {
  id: 35,
  attribute: 'independent',
  category: 'reject',
  question: 'I can do it all myself.'
}, {
  id: 36,
  attribute: 'independent',
  category: 'accept',
  question: 'I live dependently upon God.'
}, {
  id: 37,
  attribute: 'invisible',
  category: 'reflect',
  question: 'My intuition (or gut) is an important consideration in most of my decisions.'
}, {
  id: 38,
  attribute: 'invisible',
  category: 'reject',
  question: 'I believe that reality is rooted only in what I can physically see.'
}, {
  id: 39,
  attribute: 'invisible',
  category: 'accept',
  question: 'I believe in and value a spiritual kingdom which I cannot physically see, but one that Jesus introduced while He was physically on earth.'
}, {
  id: 40,
  attribute: 'jealous',
  category: 'reflect',
  question: 'I really want the best for those closest to me.'
}, {
  id: 41,
  attribute: 'jealous',
  category: 'reject',
  question: 'God really has no claim on me.'
}, {
  id: 42,
  attribute: 'jealous',
  category: 'accept',
  question: 'I recognize God\'s ownership of me, and see His law, discipline and justice as fully good and protective.'
}, {
  id: 43,
  attribute: 'joy',
  category: 'reflect',
  question: 'I seek beauty and pleasure.'
}, {
  id: 44,
  attribute: 'joy',
  category: 'reject',
  question: 'My happiness comes from things and experiences apart from God.'
}, {
  id: 45,
  attribute: 'joy',
  category: 'accept',
  question: 'I find pleasure in Jesus Christ and His word.'
}, {
  id: 46,
  attribute: 'just',
  category: 'reflect',
  question: 'I believe I am right most of the time.'
}, {
  id: 47,
  attribute: 'just',
  category: 'reject',
  question: 'There is no absolute right or wrong.'
}, {
  id: 48,
  attribute: 'just',
  category: 'accept',
  question: 'I recognize and rely on God and the human authorities He places in my life to carry out justice properly.'
}, {
  id: 49,
  attribute: 'love',
  category: 'reflect',
  question: 'I love my family and am willing to sacrifice much for them.'
}, {
  id: 50,
  attribute: 'love',
  category: 'reject',
  question: 'I love many things, but God does not really make the top ten.'
}, {
  id: 51,
  attribute: 'love',
  category: 'accept',
  question: 'I realize that God\'s love for me is not dependent upon my performance.'
}, {
  id: 52,
  attribute: 'mercy',
  category: 'reflect',
  question: 'When I have a need, I want others to show me mercy.'
}, {
  id: 53,
  attribute: 'mercy',
  category: 'reject',
  question: 'I help those in need through my taxes - that\'s plenty!'
}, {
  id: 54,
  attribute: 'mercy',
  category: 'accept',
  question: 'I am absolutely dependent on God\'s mercy and forgiveness for my sins - else I could never know Him as I do.'
}, {
  id: 55,
  attribute: 'omnipotent',
  category: 'reflect',
  question: 'I really like autonomy - the ability to do what I want.'
}, {
  id: 56,
  attribute: 'omnipotent',
  category: 'reject',
  question: 'My life will really only be what I make of it.'
}, {
  id: 57,
  attribute: 'omnipotent',
  category: 'accept',
  question: 'I recognize God as the source of all power.'
}, {
  id: 58,
  attribute: 'omnipresent',
  category: 'reflect',
  question: 'I often would like to be two places at the same time.'
}, {
  id: 59,
  attribute: 'omnipresent',
  category: 'reject',
  question: 'God is not present in my life and I doubt that He even exists.'
}, {
  id: 60,
  attribute: 'omnipresent',
  category: 'accept',
  question: 'I realize God is present everwhere at all times.'
}, {
  id: 61,
  attribute: 'omniscient',
  category: 'reflect',
  question: 'I really like learning new things.'
}, {
  id: 62,
  attribute: 'omniscient',
  category: 'reject',
  question: 'Jesus taught many good things, but he is not now actively thinking about me.'
}, {
  id: 63,
  attribute: 'omniscient',
  category: 'accept',
  question: 'The most important thing for me to learn is who God is and then let that knowledge shape my soul.'
}, {
  id: 64,
  attribute: 'patience (self-control)',
  category: 'reflect',
  question: 'I would like to have more patience than I have.'
}, {
  id: 65,
  attribute: 'patience (self-control)',
  category: 'reject',
  question: 'I will deal harshly with anything or anyone that gets in my way.'
}, {
  id: 66,
  attribute: 'patience (self-control)',
  category: 'accept',
  question: 'I see all that I cannot control as God\'s plan and seek Him in it.'
}, {
  id: 67,
  attribute: 'peace (unity/oneness)',
  category: 'reflect',
  question: 'I always seek to be both physically and emotionally fit.'
}, {
  id: 68,
  attribute: 'peace (unity/oneness)',
  category: 'reject',
  question: 'I will be at peace when I get what I want.'
}, {
  id: 69,
  attribute: 'peace (unity/oneness)',
  category: 'accept',
  question: 'My only real peace comes from reconciling with God through Jesus as Lord.'
}, {
  id: 70,
  attribute: 'perfect plan (will/foreknowledge)',
  category: 'reflect',
  question: 'I like to do whatever I want.'
}, {
  id: 71,
  attribute: 'perfect plan (will/foreknowledge)',
  category: 'reject',
  question: 'No one else has the right to tell me what to do.'
}, {
  id: 72,
  attribute: 'perfect plan (will/foreknowledge)',
  category: 'accept',
  question: 'I see my life as a part of God\'s perfect plan.'
}, {
  id: 73,
  attribute: 'Provider (Preserver/Sustainer)',
  category: 'reflect',
  question: 'I will meet the needs of those who are depending on me.'
}, {
  id: 74,
  attribute: 'Provider (Preserver/Sustainer)',
  category: 'reject',
  question: 'I have earned everything I have.'
}, {
  id: 75,
  attribute: 'Provider (Preserver/Sustainer)',
  category: 'accept',
  question: 'I see God as the source of all good things.'
}, {
  id: 76,
  attribute: 'Savior (Redeemer/Healer)',
  category: 'reflect',
  question: 'I love to fix or restore things (or people) to their original condition.'
}, {
  id: 77,
  attribute: 'Savior (Redeemer/Healer)',
  category: 'reject',
  question: 'I have lost hope for something (acceptance, a job, my marriage, weight loss, etc.)'
}, {
  id: 78,
  attribute: 'Savior (Redeemer/Healer)',
  category: 'accept',
  question: 'I accept the fact that I need God - I am hopelessly lost in sin without Jesus.'
}, {
  id: 79,
  attribute: 'Sovereign (Supreme)',
  category: 'reflect',
  question: 'I want to make the final decisions about my life.'
}, {
  id: 80,
  attribute: 'Sovereign (Supreme)',
  category: 'reject',
  question: 'My will and pleasure is what is most important to me.'
}, {
  id: 81,
  attribute: 'Sovereign (Supreme)',
  category: 'accept',
  question: 'I gratefully submit to God’s authority.'
}, {
  id: 82,
  attribute: 'Teacher (Counselor/Guide/Father)',
  category: 'reflect',
  question: 'I like to help others learn and achieve their goals.'
}, {
  id: 83,
  attribute: 'Teacher (Counselor/Guide/Father)',
  category: 'reject',
  question: 'I know best.'
}, {
  id: 84,
  attribute: 'Teacher (Counselor/Guide/Father)',
  category: 'accept',
  question: 'I value God\'s guidance and see His commands as what is best for me.'
}, {
  id: 85,
  attribute: 'Truth',
  category: 'reflect',
  question: 'I want to understand and act upon only real truth.'
}, {
  id: 86,
  attribute: 'Truth',
  category: 'reject',
  question: 'I know that I am right and do not need to hear anything more.'
}, {
  id: 87,
  attribute: 'Truth',
  category: 'accept',
  question: 'I view and act on God’s Word in the Bible as real and true.'
}, {
  id: 88,
  attribute: 'Unique (Transcendent/Immanence/Oneness)',
  category: 'reflect',
  question: 'I like to feel special and unique.'
}, {
  id: 89,
  attribute: 'Unique (Transcendent/Immanence/Oneness)',
  category: 'reject',
  question: 'I have nothing in common with God - everyone is simply a physical mix of DNA and environment.'
}, {
  id: 90,
  attribute: 'Unique (Transcendent/Immanence/Oneness)',
  category: 'accept',
  question: 'I believe every person is a unique and valuable creation, made in the image of God.'
}, {
  id: 91,
  attribute: 'Wise',
  category: 'reflect',
  question: 'My intent is normally right and good.'
}, {
  id: 92,
  attribute: 'Wise',
  category: 'reject',
  question: 'I am normally right and my perspective is almost always good.'
}, {
  id: 93,
  attribute: 'Wise',
  category: 'accept',
  question: 'I find and fully trust God when I have a specific and difficult need.'
}, {
  id: 94,
  attribute: 'Wrath',
  category: 'reflect',
  question: 'I desire to protect the innocent by punishment of the guilty.'
}, {
  id: 95,
  attribute: 'Wrath',
  category: 'reject',
  question: 'I see no wrath of God coming on others who do whatever they want, so I might as well do whatever I want during life while I can.'
}, {
  id: 96,
  attribute: 'Wrath',
  category: 'accept',
  question: 'I believe in a God who holds everyone accountable for their actions in this life.'
}];
var _default = questionArray;
exports.default = _default;

},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3Rlc3QuanMiLCIuLi9zY3JpcHRzL3Rlc3RBcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBWjs7Ozs7QUNBQTs7OztBQUdBLFNBQVMsWUFBVCxDQUFzQixTQUF0QixFQUFpQyxhQUFqQyxFQUFnRCxnQkFBaEQsRUFBa0UsWUFBbEUsRUFBK0U7QUFFOUUsV0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLGFBQWxDLEVBQWdEO0FBQy9DO0FBQ00sUUFBSSxNQUFNLEdBQUcsRUFBYjtBQUNBLFFBQUksT0FBSixDQUh5QyxDQUt6Qzs7QUFDQSxTQUFJLElBQUksQ0FBQyxHQUFHLENBQVosRUFBZSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQTdCLEVBQXFDLENBQUMsRUFBdEMsRUFBMEM7QUFFdEM7QUFDQSxNQUFBLE9BQU8sR0FBRyxFQUFWLENBSHNDLENBS3RDOztBQUNBLFdBQUksTUFBSixJQUFjLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYSxPQUEzQixFQUFtQztBQUUvQjtBQUNBLFFBQUEsT0FBTyxDQUFDLElBQVIsQ0FDSSxZQUNNLG9DQUROLEdBQzJDLENBRDNDLEdBQzZDLFdBRDdDLEdBQ3lELE1BRHpELEdBQ2dFLElBRGhFLEdBRU0sTUFGTixHQUVlLElBRmYsR0FHTSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWEsT0FBYixDQUFxQixNQUFyQixDQUhOLEdBSUUsVUFMTjtBQU9ILE9BaEJxQyxDQWtCdEM7OztBQUNBLE1BQUEsTUFBTSxDQUFDLElBQVAsQ0FDSSwyQkFBMkIsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhLFFBQXhDLEdBQW1ELFFBQW5ELEdBQ0UsdUJBREYsR0FDNEIsT0FBTyxDQUFDLElBQVIsQ0FBYSxFQUFiLENBRDVCLEdBQytDLFFB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QUFKVixDQXppQlEsRUEraUJSO0FBQ0EsRUFBQSxFQUFFLEVBQUUsRUFESjtBQUVBLEVBQUEsU0FBUyxFQUFFLE9BRlg7QUFHQSxFQUFBLFFBQVEsRUFBRSxTQUhWO0FBSUEsRUFBQSxRQUFRLEVBQUU7QUFKVixDQS9pQlEsRUFxakJSO0FBQ0EsRUFBQSxFQUFFLEVBQUUsRUFESjtBQUVBLEVBQUEsU0FBUyxFQUFFLE9BRlg7QUFHQSxFQUFBLFFBQVEsRUFBRSxRQUhWO0FBSUEsRUFBQSxRQUFRLEVBQUU7QUFKVixDQXJqQlEsRUEyakJSO0FBQ0EsRUFBQSxFQUFFLEVBQUUsRUFESjtBQUVBLEVBQUEsU0FBUyxFQUFFLE9BRlg7QUFHQSxFQUFBLFFBQVEsRUFBRSxRQUhWO0FBSUEsRUFBQSxRQUFRLEVBQUU7QUFKVixDQTNqQlEsQ0FBWjtlQW1rQmUsYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnNvbGUubG9nKFwiSSdtIGNvbm5lY3RlZCFcIik7IiwiaW1wb3J0IHF1ZXN0aW9uQXJyYXkgZnJvbSBcIi4vdGVzdEFycmF5XCI7XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVRdWl6KHF1ZXN0aW9ucywgcXVpekNvbnRhaW5lciwgcmVzdWx0c0NvbnRhaW5lciwgc3VibWl0QnV0dG9uKXtcblxuXHRmdW5jdGlvbiBzaG93UXVlc3Rpb25zKHF1ZXN0aW9ucywgcXVpekNvbnRhaW5lcil7XG5cdFx0Ly8gd2UnbGwgbmVlZCBhIHBsYWNlIHRvIHN0b3JlIHRoZSBvdXRwdXQgYW5kIHRoZSBhbnN3ZXIgY2hvaWNlc1xuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBhbnN3ZXJzO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHF1ZXN0aW9uLi4uXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgLy8gZmlyc3QgcmVzZXQgdGhlIGxpc3Qgb2YgYW5zd2Vyc1xuICAgICAgICAgICAgYW5zd2VycyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBmb3IgZWFjaCBhdmFpbGFibGUgYW5zd2VyIHRvIHRoaXMgcXVlc3Rpb24uLi5cbiAgICAgICAgICAgIGZvcihsZXR0ZXIgaW4gcXVlc3Rpb25zW2ldLmFuc3dlcnMpe1xuXG4gICAgICAgICAgICAgICAgLy8gLi4uYWRkIGFuIGh0bWwgcmFkaW8gYnV0dG9uXG4gICAgICAgICAgICAgICAgYW5zd2Vycy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsPidcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicXVlc3Rpb24nK2krJ1wiIHZhbHVlPVwiJytsZXR0ZXIrJ1wiPidcbiAgICAgICAgICAgICAgICAgICAgICAgICsgbGV0dGVyICsgJzogJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyBxdWVzdGlvbnNbaV0uYW5zd2Vyc1tsZXR0ZXJdXG4gICAgICAgICAgICAgICAgICAgICsgJzwvbGFiZWw+J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGlzIHF1ZXN0aW9uIGFuZCBpdHMgYW5zd2VycyB0byB0aGUgb3V0cHV0XG4gICAgICAgICAgICBvdXRwdXQucHVzaChcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInF1ZXN0aW9uXCI+JyArIHF1ZXN0aW9uc1tpXS5xdWVzdGlvbiArICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImFuc3dlcnNcIj4nICsgYW5zd2Vycy5qb2luKCcnKSArICc8L2Rpdj4nXG4gICAgICAgICAgICApO1xuXHR9XG5cblx0Ly8gZmluYWxseSBjb21iaW5lIG91ciBvdXRwdXQgbGlzdCBpbnRvIG9uZSBzdHJpbmcgb2YgaHRtbCBhbmQgcHV0IGl0IG9uIHRoZSBwYWdlXG5cdHF1aXpDb250YWluZXIuaW5uZXJIVE1MID0gb3V0cHV0LmpvaW4oJycpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2hvd1Jlc3VsdHMocXVlc3Rpb25zLCBxdWl6Q29udGFpbmVyLCByZXN1bHRzQ29udGFpbmVyKXtcblx0XHQvLyBjb2RlIHdpbGwgZ28gaGVyZVxuXHR9XG5cblx0Ly8gc2hvdyB0aGUgcXVlc3Rpb25zXG5cdHNob3dRdWVzdGlvbnMocXVlc3Rpb25BcnJheSwgcXVpekNvbnRhaW5lcik7XG5cblx0Ly8gd2hlbiB1c2VyIGNsaWNrcyBzdWJtaXQsIHNob3cgcmVzdWx0c1xuXHRzdWJtaXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCl7XG5cdFx0c2hvd1Jlc3VsdHMocXVlc3Rpb25zLCBxdWl6Q29udGFpbmVyLCByZXN1bHRzQ29udGFpbmVyKTtcblx0fVxufSIsInF1ZXN0aW9ucyA9IFtcbiAgICB7XG4gICAgaWQ6IDEsXG4gICAgYXR0cmlidXRlOiAnYWNjZXNzaWJsZScsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgZW5qb3kgaW50ZXJhY3Rpbmcgd2l0aCBvdGhlcnMgYW5kIGhhdmUgYSBzZW5zZSBvZiBiZWxvbmdpbmcgdG8gYSBncm91cC4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDIsXG4gICAgYXR0cmlidXRlOiAnYWNjZXNzaWJsZScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBqdXN0IHdhbnQgdG8gYmUgYWxvbmUgYW5kIG5vdCBiZSBib3RoZXJlZCBieSBhbnlvbmUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAzLFxuICAgIGF0dHJpYnV0ZTogJ2FjY2Vzc2libGUnLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgZGVzaXJlIHRvIGJlIGEgcGFydCBvZiBhIGJvZHkgb2YgbG9jYWwgQ2hyaXN0aWFuIGJlbGlldmVycy4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDQsXG4gICAgYXR0cmlidXRlOiAnY3JlYXRvcicsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgZW5qb3kgY3JlYXRpbmcgc29tZXRoaW5nIG5ldyAtIG11c2ljLCBhcnQsIGxpdGVyYXR1cmUsIGRlc2lnbiwgbWFjaGluZXMsIGNyYWZ0cywgZm9vZCwgcGhvdG9zLCBjaGlsZHJlbiwgZXRjLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNSxcbiAgICBhdHRyaWJ1dGU6ICdjcmVhdG9yJyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGRvblxcJ3Qgc2VlIHRoZSBwdXJwb3NlIGluIGxpdmluZy4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDYsXG4gICAgYXR0cmlidXRlOiAnY3JlYXRvcicsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSBnYWluIGluc2lnaHQgYW5kIHBlcnNwZWN0aXZlIGludG8gdGhlIHdvcmxkIHRocm91Z2ggY29ubmVjdGlvbiB3aXRoIHRoZSBPbmUgd2hvIGNyZWF0ZWQgbWUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA3LFxuICAgIGF0dHJpYnV0ZTogJ2luZmluaXRlJyxcbiAgICBjYXRlZ29yeTogJ3JlZmxlY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSB3YW50IHRvIG1ha2UgYSBsYXN0aW5nIGltcGFjdCAoY2hpbGRyZW4sIGZhbWUsIGJ1aWxkaW5nIHdpbmcsIG1lbW9yaWFsKS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDgsXG4gICAgYXR0cmlidXRlOiAnaW5maW5pdGUnLFxuICAgIGNhdGVnb3J5OiAncmVqZWN0JyxcbiAgICBxdWVzdGlvbjogJ1RoaXMgbGlmZSBpcyBhbGwgdGhlcmUgaXMuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA5LFxuICAgIGF0dHJpYnV0ZTogJ2luZmluaXRlJyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdJIGFtIGludmVzdGluZyBpbiBldGVybmFsIHRoaW5ncyBzdWNoIGFzIGxvdmluZyBvdGhlcnMgYW5kIGtub3dpbmcgR29kLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMTAsXG4gICAgYXR0cmlidXRlOiAnZmFpdGhmdWwnLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGFtIHRydWx5IGxveWFsIHRvIGEgcGVyc29uIG9yIG9yZ2FuaXphdGlvbi4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDExLFxuICAgIGF0dHJpYnV0ZTogJ2ZhaXRoZnVsJyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGRvblxcJ3Qgd2FudCB0byBiZSB0aWVkIGRvd24gYnkgYW55b25lIG9yIGFueXRoaW5nLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMTIsXG4gICAgYXR0cmlidXRlOiAnZmFpdGhmdWwnLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgdHJ1c3QgaW4gR29kIGFuZCBzcGVjaWZpY2FsbHkgdGhlIEJpYmxlIGZvciBkaXJlY3Rpb24gYW5kIHRydXRoZnVsIHVuZGVyc3RhbmRpbmcgb2YgdGhpcyBsaWZlLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMTMsXG4gICAgYXR0cmlidXRlOiAnZ2xvcnknLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGxpa2Ugb3RoZXJzIHRvIGxpc3RlbiB0byBtZSBhbmQgYXBwcmVjaWF0ZSB3aG8gSSBhbS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDE0LFxuICAgIGF0dHJpYnV0ZTogJ2dsb3J5JyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdHb2QgZG9lcyBub3QgZGVzZXJ2ZSBhbnkgbW9yZSBnbG9yeSB0aGFuIGFueW9uZSBlbHNlLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMTUsXG4gICAgYXR0cmlidXRlOiAnZ2xvcnknLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgbWFrZSBtdWNoIG9mIEdvZCBhbmQgd2FudCB0byBiZSBtb3JlIGxpa2UgQ2hyaXN0LidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMTYsXG4gICAgYXR0cmlidXRlOiAnZ29vZCcsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgd2FudCB0byBsaXZlIHRoZSBcXCdnb29kIGxpZmVcXCcuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAxNyxcbiAgICBhdHRyaWJ1dGU6ICdnb29kJyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdBdCB0aW1lcywgSSBqdXN0IHdhbnQgdG8gYmUgYmFkLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMTgsXG4gICAgYXR0cmlidXRlOiAnZ29vZCcsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSBkZWZpbmUgZ29vZCBhcyB3aGF0ZXZlciBjb21lcyBmcm9tIEdvZCAtIG5vdCBqdXN0IHdoYXQgSSB3YW50IChpLmUuIHdoYXQgYnJpbmdzIHVzIHBsZWFzdXJlIGFuZCBjb21mb3J0KS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDE5LFxuICAgIGF0dHJpYnV0ZTogJ2dyYWNlJyxcbiAgICBjYXRlZ29yeTogJ3JlZmxlY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBsb3ZlIGdpdmluZyBnaWZ0cyB0byBwZW9wbGUsIGVzcGVjaWFsbHkgd2hlbiB0aGV5IGFyZSBub3QgZXhwZWN0aW5nIHRoZW0uJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAyMCxcbiAgICBhdHRyaWJ1dGU6ICdncmFjZScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBhbSBub3Qgd2FzdGluZyBteSB0aW1lLCBtb25leSBvciBlZmZvcnQgb24gc29tZW9uZSB3aG8gZG9lc25cXCd0IGRlc2VydmUgaXQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAyMSxcbiAgICBhdHRyaWJ1dGU6ICdncmFjZScsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSBhY2NlcHQgR29kXFwncyBmb3JnaXZlbmVzcyBvZiBteSBzaW5zIGJ5IGJlbGlldmluZyBpbiBKZXN1cyBDaHJpc3QgYW5kIEhpcyB3b3JrIG9uIHRoZSBjcm9zcy4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDIyLFxuICAgIGF0dHJpYnV0ZTogJ2hvbHknLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGNvbnNpZGVyIG15IFxcJ3NwaXJpdHVhbFxcJyBzaWRlIHdoZW4gbWFraW5nIG1ham9yIGRlY2lzaW9ucy4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDIzLFxuICAgIGF0dHJpYnV0ZTogJ2hvbHknLFxuICAgIGNhdGVnb3J5OiAncmVqZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgYmVsaWV2ZSBteSBwZXJzb25hbCBmcmVlZG9tIGlzIG1vcmUgaW1wb3J0YW50IHRoYXQgYW55IGJlbmVmaXRzIGdhaW5lZCBmcm9tIHJlc3RyaWN0aW9ucyBpbXBvc2VkIGJ5IG90aGVycywgaW5jbHVkaW5nIEdvZC4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDI0LFxuICAgIGF0dHJpYnV0ZTogJ2hvbHknLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgc2VlIEdvZFxcJ3MgY29tbWFuZHMvbGF3IGFzIHdob2xseSBnb29kIGFuZCB0aHVzIGFyZSBmb3IgbXkgYmVuZWZpdCB0byBwdXJzdWUgYW5kIG9iZXkuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAyNSxcbiAgICBhdHRyaWJ1dGU6ICdodW1ibGUnLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIHdhbnQgdG8gdHJ1bHkga25vdyBhbmQgdW5kZXJzdGFuZCB3aG8gSSBhbS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDI2LFxuICAgIGF0dHJpYnV0ZTogJ2h1bWJsZScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBrbm93IHRoYXQgSSBhbSBiZXR0ZXIgdGhhbiBtb3N0IHBlb3BsZS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDI3LFxuICAgIGF0dHJpYnV0ZTogJ2h1bWJsZScsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSBsaWtlIHdobyBJIGFtIC0gYSBjaGlsZCBvZiBHb2QuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAyOCxcbiAgICBhdHRyaWJ1dGU6ICdpbW11dGFibGUnLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGxpa2UgbXkgb3duIGRhaWx5IHJvdXRpbmVzIGFuZCBoYWJpdHMgKGkuZS4gbW9ybmluZyBjb2ZmZWUsIGFsb25lIHRpbWUsIG15IFxcJ3RvIGRvXFwnIGxpc3QsIGV0Yy4pLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMjksXG4gICAgYXR0cmlidXRlOiAnaW1tdXRhYmxlJyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGJlbGlldmUgYWxsIHRoaW5ncyBjaGFuZ2Ugb3IgZXZvbHZlLCBpbmNsdWRpbmcgR29kLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMzAsXG4gICAgYXR0cmlidXRlOiAnaW1tdXRhYmxlJyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdJIGNhbiBmdWxseSB0cnVzdCBHb2Qgd2hlbiBIZSBtYWtlcyBhIHByb21pc2UuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAzMSxcbiAgICBhdHRyaWJ1dGU6ICdpbmNvbXByZWhlbnNpYmxlJyxcbiAgICBjYXRlZ29yeTogJ3JlZmxlY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBsb3ZlIGV4cGxvcmluZyB0aGUgdW5rbm93biAtIHRvIHRyeSBhbmQgZmlndXJlIG91dCBhIG15c3Rlcnkgb3IgcHV6emxlLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogMzIsXG4gICAgYXR0cmlidXRlOiAnaW5jb21wcmVoZW5zaWJsZScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBiZWxpZXZlIHRoYXQsIGdpdmVuIGVub3VnaCB0aW1lIGFuZCBlZmZvcnQsIG1hbiB3aWxsIGNvbGxlY3RpdmVseSB1bmRlcnN0YW5kIGV2ZXJ5dGhpbmcuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAzMyxcbiAgICBhdHRyaWJ1dGU6ICdpbmNvbXByZWhlbnNpYmxlJyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdXaXRoIHdoYXQgSSBkbyBrbm93IGFib3V0IEdvZCwgSSBjYW4gdHJ1c3QgSGltIGluIHRoZSB0aGluZ3MgSSBkb25cXCd0IGZ1bGx5IHVuZGVyc3RhbmQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAzNCxcbiAgICBhdHRyaWJ1dGU6ICdpbmRlcGVuZGVudCcsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgbGlrZSB0byBsaXZlIGFzIGluZGVwZW5kZW50bHkgYXMgSSBjYW4uJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAzNSxcbiAgICBhdHRyaWJ1dGU6ICdpbmRlcGVuZGVudCcsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBjYW4gZG8gaXQgYWxsIG15c2VsZi4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDM2LFxuICAgIGF0dHJpYnV0ZTogJ2luZGVwZW5kZW50JyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdJIGxpdmUgZGVwZW5kZW50bHkgdXBvbiBHb2QuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAzNyxcbiAgICBhdHRyaWJ1dGU6ICdpbnZpc2libGUnLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdNeSBpbnR1aXRpb24gKG9yIGd1dCkgaXMgYW4gaW1wb3J0YW50IGNvbnNpZGVyYXRpb24gaW4gbW9zdCBvZiBteSBkZWNpc2lvbnMuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiAzOCxcbiAgICBhdHRyaWJ1dGU6ICdpbnZpc2libGUnLFxuICAgIGNhdGVnb3J5OiAncmVqZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgYmVsaWV2ZSB0aGF0IHJlYWxpdHkgaXMgcm9vdGVkIG9ubHkgaW4gd2hhdCBJIGNhbiBwaHlzaWNhbGx5IHNlZS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDM5LFxuICAgIGF0dHJpYnV0ZTogJ2ludmlzaWJsZScsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSBiZWxpZXZlIGluIGFuZCB2YWx1ZSBhIHNwaXJpdHVhbCBraW5nZG9tIHdoaWNoIEkgY2Fubm90IHBoeXNpY2FsbHkgc2VlLCBidXQgb25lIHRoYXQgSmVzdXMgaW50cm9kdWNlZCB3aGlsZSBIZSB3YXMgcGh5c2ljYWxseSBvbiBlYXJ0aC4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDQwLFxuICAgIGF0dHJpYnV0ZTogJ2plYWxvdXMnLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIHJlYWxseSB3YW50IHRoZSBiZXN0IGZvciB0aG9zZSBjbG9zZXN0IHRvIG1lLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNDEsXG4gICAgYXR0cmlidXRlOiAnamVhbG91cycsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnR29kIHJlYWxseSBoYXMgbm8gY2xhaW0gb24gbWUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA0MixcbiAgICBhdHRyaWJ1dGU6ICdqZWFsb3VzJyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdJIHJlY29nbml6ZSBHb2RcXCdzIG93bmVyc2hpcCBvZiBtZSwgYW5kIHNlZSBIaXMgbGF3LCBkaXNjaXBsaW5lIGFuZCBqdXN0aWNlIGFzIGZ1bGx5IGdvb2QgYW5kIHByb3RlY3RpdmUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA0MyxcbiAgICBhdHRyaWJ1dGU6ICdqb3knLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIHNlZWsgYmVhdXR5IGFuZCBwbGVhc3VyZS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDQ0LFxuICAgIGF0dHJpYnV0ZTogJ2pveScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnTXkgaGFwcGluZXNzIGNvbWVzIGZyb20gdGhpbmdzIGFuZCBleHBlcmllbmNlcyBhcGFydCBmcm9tIEdvZC4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDQ1LFxuICAgIGF0dHJpYnV0ZTogJ2pveScsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSBmaW5kIHBsZWFzdXJlIGluIEplc3VzIENocmlzdCBhbmQgSGlzIHdvcmQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA0NixcbiAgICBhdHRyaWJ1dGU6ICdqdXN0JyxcbiAgICBjYXRlZ29yeTogJ3JlZmxlY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBiZWxpZXZlIEkgYW0gcmlnaHQgbW9zdCBvZiB0aGUgdGltZS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDQ3LFxuICAgIGF0dHJpYnV0ZTogJ2p1c3QnLFxuICAgIGNhdGVnb3J5OiAncmVqZWN0JyxcbiAgICBxdWVzdGlvbjogJ1RoZXJlIGlzIG5vIGFic29sdXRlIHJpZ2h0IG9yIHdyb25nLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNDgsXG4gICAgYXR0cmlidXRlOiAnanVzdCcsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSByZWNvZ25pemUgYW5kIHJlbHkgb24gR29kIGFuZCB0aGUgaHVtYW4gYXV0aG9yaXRpZXMgSGUgcGxhY2VzIGluIG15IGxpZmUgdG8gY2Fycnkgb3V0IGp1c3RpY2UgcHJvcGVybHkuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA0OSxcbiAgICBhdHRyaWJ1dGU6ICdsb3ZlJyxcbiAgICBjYXRlZ29yeTogJ3JlZmxlY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBsb3ZlIG15IGZhbWlseSBhbmQgYW0gd2lsbGluZyB0byBzYWNyaWZpY2UgbXVjaCBmb3IgdGhlbS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDUwLFxuICAgIGF0dHJpYnV0ZTogJ2xvdmUnLFxuICAgIGNhdGVnb3J5OiAncmVqZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgbG92ZSBtYW55IHRoaW5ncywgYnV0IEdvZCBkb2VzIG5vdCByZWFsbHkgbWFrZSB0aGUgdG9wIHRlbi4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDUxLFxuICAgIGF0dHJpYnV0ZTogJ2xvdmUnLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgcmVhbGl6ZSB0aGF0IEdvZFxcJ3MgbG92ZSBmb3IgbWUgaXMgbm90IGRlcGVuZGVudCB1cG9uIG15IHBlcmZvcm1hbmNlLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNTIsXG4gICAgYXR0cmlidXRlOiAnbWVyY3knLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdXaGVuIEkgaGF2ZSBhIG5lZWQsIEkgd2FudCBvdGhlcnMgdG8gc2hvdyBtZSBtZXJjeS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDUzLFxuICAgIGF0dHJpYnV0ZTogJ21lcmN5JyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGhlbHAgdGhvc2UgaW4gbmVlZCB0aHJvdWdoIG15IHRheGVzIC0gdGhhdFxcJ3MgcGxlbnR5ISdcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNTQsXG4gICAgYXR0cmlidXRlOiAnbWVyY3knLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgYW0gYWJzb2x1dGVseSBkZXBlbmRlbnQgb24gR29kXFwncyBtZXJjeSBhbmQgZm9yZ2l2ZW5lc3MgZm9yIG15IHNpbnMgLSBlbHNlIEkgY291bGQgbmV2ZXIga25vdyBIaW0gYXMgSSBkby4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDU1LFxuICAgIGF0dHJpYnV0ZTogJ29tbmlwb3RlbnQnLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIHJlYWxseSBsaWtlIGF1dG9ub215IC0gdGhlIGFiaWxpdHkgdG8gZG8gd2hhdCBJIHdhbnQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA1NixcbiAgICBhdHRyaWJ1dGU6ICdvbW5pcG90ZW50JyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdNeSBsaWZlIHdpbGwgcmVhbGx5IG9ubHkgYmUgd2hhdCBJIG1ha2Ugb2YgaXQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA1NyxcbiAgICBhdHRyaWJ1dGU6ICdvbW5pcG90ZW50JyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdJIHJlY29nbml6ZSBHb2QgYXMgdGhlIHNvdXJjZSBvZiBhbGwgcG93ZXIuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA1OCxcbiAgICBhdHRyaWJ1dGU6ICdvbW5pcHJlc2VudCcsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgb2Z0ZW4gd291bGQgbGlrZSB0byBiZSB0d28gcGxhY2VzIGF0IHRoZSBzYW1lIHRpbWUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA1OSxcbiAgICBhdHRyaWJ1dGU6ICdvbW5pcHJlc2VudCcsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnR29kIGlzIG5vdCBwcmVzZW50IGluIG15IGxpZmUgYW5kIEkgZG91YnQgdGhhdCBIZSBldmVuIGV4aXN0cy4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDYwLFxuICAgIGF0dHJpYnV0ZTogJ29tbmlwcmVzZW50JyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdJIHJlYWxpemUgR29kIGlzIHByZXNlbnQgZXZlcndoZXJlIGF0IGFsbCB0aW1lcy4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDYxLFxuICAgIGF0dHJpYnV0ZTogJ29tbmlzY2llbnQnLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIHJlYWxseSBsaWtlIGxlYXJuaW5nIG5ldyB0aGluZ3MuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA2MixcbiAgICBhdHRyaWJ1dGU6ICdvbW5pc2NpZW50JyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdKZXN1cyB0YXVnaHQgbWFueSBnb29kIHRoaW5ncywgYnV0IGhlIGlzIG5vdCBub3cgYWN0aXZlbHkgdGhpbmtpbmcgYWJvdXQgbWUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA2MyxcbiAgICBhdHRyaWJ1dGU6ICdvbW5pc2NpZW50JyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdUaGUgbW9zdCBpbXBvcnRhbnQgdGhpbmcgZm9yIG1lIHRvIGxlYXJuIGlzIHdobyBHb2QgaXMgYW5kIHRoZW4gbGV0IHRoYXQga25vd2xlZGdlIHNoYXBlIG15IHNvdWwuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA2NCxcbiAgICBhdHRyaWJ1dGU6ICdwYXRpZW5jZSAoc2VsZi1jb250cm9sKScsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgd291bGQgbGlrZSB0byBoYXZlIG1vcmUgcGF0aWVuY2UgdGhhbiBJIGhhdmUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA2NSxcbiAgICBhdHRyaWJ1dGU6ICdwYXRpZW5jZSAoc2VsZi1jb250cm9sKScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSB3aWxsIGRlYWwgaGFyc2hseSB3aXRoIGFueXRoaW5nIG9yIGFueW9uZSB0aGF0IGdldHMgaW4gbXkgd2F5LidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNjYsXG4gICAgYXR0cmlidXRlOiAncGF0aWVuY2UgKHNlbGYtY29udHJvbCknLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgc2VlIGFsbCB0aGF0IEkgY2Fubm90IGNvbnRyb2wgYXMgR29kXFwncyBwbGFuIGFuZCBzZWVrIEhpbSBpbiBpdC4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDY3LFxuICAgIGF0dHJpYnV0ZTogJ3BlYWNlICh1bml0eS9vbmVuZXNzKScsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgYWx3YXlzIHNlZWsgdG8gYmUgYm90aCBwaHlzaWNhbGx5IGFuZCBlbW90aW9uYWxseSBmaXQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA2OCxcbiAgICBhdHRyaWJ1dGU6ICdwZWFjZSAodW5pdHkvb25lbmVzcyknLFxuICAgIGNhdGVnb3J5OiAncmVqZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgd2lsbCBiZSBhdCBwZWFjZSB3aGVuIEkgZ2V0IHdoYXQgSSB3YW50LidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNjksXG4gICAgYXR0cmlidXRlOiAncGVhY2UgKHVuaXR5L29uZW5lc3MpJyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdNeSBvbmx5IHJlYWwgcGVhY2UgY29tZXMgZnJvbSByZWNvbmNpbGluZyB3aXRoIEdvZCB0aHJvdWdoIEplc3VzIGFzIExvcmQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA3MCxcbiAgICBhdHRyaWJ1dGU6ICdwZXJmZWN0IHBsYW4gKHdpbGwvZm9yZWtub3dsZWRnZSknLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGxpa2UgdG8gZG8gd2hhdGV2ZXIgSSB3YW50LidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNzEsXG4gICAgYXR0cmlidXRlOiAncGVyZmVjdCBwbGFuICh3aWxsL2ZvcmVrbm93bGVkZ2UpJyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdObyBvbmUgZWxzZSBoYXMgdGhlIHJpZ2h0IHRvIHRlbGwgbWUgd2hhdCB0byBkby4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDcyLFxuICAgIGF0dHJpYnV0ZTogJ3BlcmZlY3QgcGxhbiAod2lsbC9mb3Jla25vd2xlZGdlKScsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSBzZWUgbXkgbGlmZSBhcyBhIHBhcnQgb2YgR29kXFwncyBwZXJmZWN0IHBsYW4uJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA3MyxcbiAgICBhdHRyaWJ1dGU6ICdQcm92aWRlciAoUHJlc2VydmVyL1N1c3RhaW5lciknLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIHdpbGwgbWVldCB0aGUgbmVlZHMgb2YgdGhvc2Ugd2hvIGFyZSBkZXBlbmRpbmcgb24gbWUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA3NCxcbiAgICBhdHRyaWJ1dGU6ICdQcm92aWRlciAoUHJlc2VydmVyL1N1c3RhaW5lciknLFxuICAgIGNhdGVnb3J5OiAncmVqZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgaGF2ZSBlYXJuZWQgZXZlcnl0aGluZyBJIGhhdmUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA3NSxcbiAgICBhdHRyaWJ1dGU6ICdQcm92aWRlciAoUHJlc2VydmVyL1N1c3RhaW5lciknLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgc2VlIEdvZCBhcyB0aGUgc291cmNlIG9mIGFsbCBnb29kIHRoaW5ncy4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDc2LFxuICAgIGF0dHJpYnV0ZTogJ1NhdmlvciAoUmVkZWVtZXIvSGVhbGVyKScsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgbG92ZSB0byBmaXggb3IgcmVzdG9yZSB0aGluZ3MgKG9yIHBlb3BsZSkgdG8gdGhlaXIgb3JpZ2luYWwgY29uZGl0aW9uLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNzcsXG4gICAgYXR0cmlidXRlOiAnU2F2aW9yIChSZWRlZW1lci9IZWFsZXIpJyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGhhdmUgbG9zdCBob3BlIGZvciBzb21ldGhpbmcgKGFjY2VwdGFuY2UsIGEgam9iLCBteSBtYXJyaWFnZSwgd2VpZ2h0IGxvc3MsIGV0Yy4pJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA3OCxcbiAgICBhdHRyaWJ1dGU6ICdTYXZpb3IgKFJlZGVlbWVyL0hlYWxlciknLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgYWNjZXB0IHRoZSBmYWN0IHRoYXQgSSBuZWVkIEdvZCAtIEkgYW0gaG9wZWxlc3NseSBsb3N0IGluIHNpbiB3aXRob3V0IEplc3VzLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogNzksXG4gICAgYXR0cmlidXRlOiAnU292ZXJlaWduIChTdXByZW1lKScsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgd2FudCB0byBtYWtlIHRoZSBmaW5hbCBkZWNpc2lvbnMgYWJvdXQgbXkgbGlmZS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDgwLFxuICAgIGF0dHJpYnV0ZTogJ1NvdmVyZWlnbiAoU3VwcmVtZSknLFxuICAgIGNhdGVnb3J5OiAncmVqZWN0JyxcbiAgICBxdWVzdGlvbjogJ015IHdpbGwgYW5kIHBsZWFzdXJlIGlzIHdoYXQgaXMgbW9zdCBpbXBvcnRhbnQgdG8gbWUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA4MSxcbiAgICBhdHRyaWJ1dGU6ICdTb3ZlcmVpZ24gKFN1cHJlbWUpJyxcbiAgICBjYXRlZ29yeTogJ2FjY2VwdCcsXG4gICAgcXVlc3Rpb246ICdJIGdyYXRlZnVsbHkgc3VibWl0IHRvIEdvZOKAmXMgYXV0aG9yaXR5LidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogODIsXG4gICAgYXR0cmlidXRlOiAnVGVhY2hlciAoQ291bnNlbG9yL0d1aWRlL0ZhdGhlciknLFxuICAgIGNhdGVnb3J5OiAncmVmbGVjdCcsXG4gICAgcXVlc3Rpb246ICdJIGxpa2UgdG8gaGVscCBvdGhlcnMgbGVhcm4gYW5kIGFjaGlldmUgdGhlaXIgZ29hbHMuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA4MyxcbiAgICBhdHRyaWJ1dGU6ICdUZWFjaGVyIChDb3Vuc2Vsb3IvR3VpZGUvRmF0aGVyKScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBrbm93IGJlc3QuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA4NCxcbiAgICBhdHRyaWJ1dGU6ICdUZWFjaGVyIChDb3Vuc2Vsb3IvR3VpZGUvRmF0aGVyKScsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSB2YWx1ZSBHb2RcXCdzIGd1aWRhbmNlIGFuZCBzZWUgSGlzIGNvbW1hbmRzIGFzIHdoYXQgaXMgYmVzdCBmb3IgbWUuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA4NSxcbiAgICBhdHRyaWJ1dGU6ICdUcnV0aCcsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgd2FudCB0byB1bmRlcnN0YW5kIGFuZCBhY3QgdXBvbiBvbmx5IHJlYWwgdHJ1dGguJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA4NixcbiAgICBhdHRyaWJ1dGU6ICdUcnV0aCcsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBrbm93IHRoYXQgSSBhbSByaWdodCBhbmQgZG8gbm90IG5lZWQgdG8gaGVhciBhbnl0aGluZyBtb3JlLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogODcsXG4gICAgYXR0cmlidXRlOiAnVHJ1dGgnLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgdmlldyBhbmQgYWN0IG9uIEdvZOKAmXMgV29yZCBpbiB0aGUgQmlibGUgYXMgcmVhbCBhbmQgdHJ1ZS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDg4LFxuICAgIGF0dHJpYnV0ZTogJ1VuaXF1ZSAoVHJhbnNjZW5kZW50L0ltbWFuZW5jZS9PbmVuZXNzKScsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgbGlrZSB0byBmZWVsIHNwZWNpYWwgYW5kIHVuaXF1ZS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDg5LFxuICAgIGF0dHJpYnV0ZTogJ1VuaXF1ZSAoVHJhbnNjZW5kZW50L0ltbWFuZW5jZS9PbmVuZXNzKScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBoYXZlIG5vdGhpbmcgaW4gY29tbW9uIHdpdGggR29kIC0gZXZlcnlvbmUgaXMgc2ltcGx5IGEgcGh5c2ljYWwgbWl4IG9mIEROQSBhbmQgZW52aXJvbm1lbnQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA5MCxcbiAgICBhdHRyaWJ1dGU6ICdVbmlxdWUgKFRyYW5zY2VuZGVudC9JbW1hbmVuY2UvT25lbmVzcyknLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgYmVsaWV2ZSBldmVyeSBwZXJzb24gaXMgYSB1bmlxdWUgYW5kIHZhbHVhYmxlIGNyZWF0aW9uLCBtYWRlIGluIHRoZSBpbWFnZSBvZiBHb2QuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA5MSxcbiAgICBhdHRyaWJ1dGU6ICdXaXNlJyxcbiAgICBjYXRlZ29yeTogJ3JlZmxlY3QnLFxuICAgIHF1ZXN0aW9uOiAnTXkgaW50ZW50IGlzIG5vcm1hbGx5IHJpZ2h0IGFuZCBnb29kLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogOTIsXG4gICAgYXR0cmlidXRlOiAnV2lzZScsXG4gICAgY2F0ZWdvcnk6ICdyZWplY3QnLFxuICAgIHF1ZXN0aW9uOiAnSSBhbSBub3JtYWxseSByaWdodCBhbmQgbXkgcGVyc3BlY3RpdmUgaXMgYWxtb3N0IGFsd2F5cyBnb29kLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogOTMsXG4gICAgYXR0cmlidXRlOiAnV2lzZScsXG4gICAgY2F0ZWdvcnk6ICdhY2NlcHQnLFxuICAgIHF1ZXN0aW9uOiAnSSBmaW5kIGFuZCBmdWxseSB0cnVzdCBHb2Qgd2hlbiBJIGhhdmUgYSBzcGVjaWZpYyBhbmQgZGlmZmljdWx0IG5lZWQuJ1xuICAgIH0sXG4gICAge1xuICAgIGlkOiA5NCxcbiAgICBhdHRyaWJ1dGU6ICdXcmF0aCcsXG4gICAgY2F0ZWdvcnk6ICdyZWZsZWN0JyxcbiAgICBxdWVzdGlvbjogJ0kgZGVzaXJlIHRvIHByb3RlY3QgdGhlIGlubm9jZW50IGJ5IHB1bmlzaG1lbnQgb2YgdGhlIGd1aWx0eS4nXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDk1LFxuICAgIGF0dHJpYnV0ZTogJ1dyYXRoJyxcbiAgICBjYXRlZ29yeTogJ3JlamVjdCcsXG4gICAgcXVlc3Rpb246ICdJIHNlZSBubyB3cmF0aCBvZiBHb2QgY29taW5nIG9uIG90aGVycyB3aG8gZG8gd2hhdGV2ZXIgdGhleSB3YW50LCBzbyBJIG1pZ2h0IGFzIHdlbGwgZG8gd2hhdGV2ZXIgSSB3YW50IGR1cmluZyBsaWZlIHdoaWxlIEkgY2FuLidcbiAgICB9LFxuICAgIHtcbiAgICBpZDogOTYsXG4gICAgYXR0cmlidXRlOiAnV3JhdGgnLFxuICAgIGNhdGVnb3J5OiAnYWNjZXB0JyxcbiAgICBxdWVzdGlvbjogJ0kgYmVsaWV2ZSBpbiBhIEdvZCB3aG8gaG9sZHMgZXZlcnlvbmUgYWNjb3VudGFibGUgZm9yIHRoZWlyIGFjdGlvbnMgaW4gdGhpcyBsaWZlLidcbiAgICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXN0aW9uQXJyYXk7Il19
