let messages = [
  "You rock!",
  "Believe in yourself!",
  "Keep going! You got this!",
  "Keep learning and growing!",
  "Never give up!"
];

function magicButton() {
  let random = Math.floor(Math.random() * messages.length);
  alert(messages[random]);
}
;