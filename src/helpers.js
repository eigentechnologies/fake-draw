export const sayMessage = (message) => {
  var voices = speechSynthesis.getVoices()
  var msg = new SpeechSynthesisUtterance(message)
  msg.voice = voices[3]
  msg.pitch = 1.5
  window.speechSynthesis.speak(msg)
}
