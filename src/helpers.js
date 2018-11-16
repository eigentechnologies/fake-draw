import faker from 'faker'

export const sayMessage = (message) => {
  var msg = new SpeechSynthesisUtterance(message)
  var voices = speechSynthesis.getVoices()
  msg.voice = voices[50]
  msg.tone = 4
  msg.pitch = 1.5
  window.speechSynthesis.speak(msg)
}

export const getRandomMessage = thing => {
  const messages = [
    `what on earth is this?`,
    `are you for real?`,
    `this doesnt look ${thing} at all!`,
    `come on!`,
    `thats just horrible`,
    `can you even draw?`,
    `this is not ${thing} enough`,
    `I see what you mean`
  ]
  return faker.random.arrayElement(messages)
}

export const getRandomTimespan = (min = 500, max = 3000) => faker.random.number({min, max})
