function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(shout(string))
}
function logWhisper(string){
  console.log(whisper(string))
}
function sayHiToGrandma(string){
  var lowercase=whisper(string)
  string === lowercase
  return "I can't hear you!"
  var uppercase=shout(string)
  string === uppercase
  return "YES INDEED!"
}