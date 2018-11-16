import faker from 'faker'

export const sayMessage = (message) => {
  var voices = speechSynthesis.getVoices()
  var msg = new SpeechSynthesisUtterance(message)
  msg.voice = voices[9]
  msg.pitch = 1.5
  window.speechSynthesis.speak(msg)
}

const messages = [
  'what on earth is this?',
  'are you for real?',
  'this doesnt look like anything',
  'come on!',
  'thats just horrible',
  'can you even draw?',
  'I see what you mean'
]

export const getRandomMessage = () => faker.random.arrayElement(messages)

export const getRandomTimespan = (min = 500, max = 3000) => faker.random.number({min, max})
