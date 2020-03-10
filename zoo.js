class Animal {
  speak(greets) {
    console.log(greets);
  }

  prepareSpeak(greets, sound) {
    let result = '';
    greets.split(' ').forEach((word) => {
      result += `${word} ${sound} `;
    });
    return result;
  }
}

class Lion extends Animal {
  speak(greets) {
    console.log(this.prepareSpeak(greets, 'roar'));
  }
}

class Tiger extends Animal {
  speak(greets) {
    console.log(this.prepareSpeak(greets, 'grrr'));
  }
}

const lion = new Lion();
lion.speak("I'm a lion");

const tiger = new Tiger();
tiger.speak("Lions suck");