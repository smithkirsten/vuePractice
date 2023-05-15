console.log('connected!')
// template: '<h2>I am the template</h2>'

const {createApp} = Vue
const app = createApp({
  data() {
    return {
      newbMessage: 'Wanna see some birds?',
      watcherMessage: 'Lemme see ur Birds!',
      count: 0,
      newSeenBird: '',
      newSoughtBird: '',
      newNoise: {bird: '', noise: ''},
      seenBirds: [],
      seekingBirds: ['snowfinch', 'spurfowl', 'smoky honeyeater', 'wattled bulbul', 'western whipbird', 'wood pewee' ],
      noises: {
        duck: 'quack',
        wren: 'tweet',
        crow: 'caw'
      },
      
    }
  },
  methods: {
        incrementCount() {
          this.count++
        },
        addSeenBird() {
          if(this.newSeenBird) {
            this.seenBirds.push(this.newSeenBird)
            this.newSeenBird = ''
          } else {
            this.seekingBirds.push(this.newSoughtBird)
            this.newSoughtBird = ''
          }
        },
        addSeekingBird() {
          this.addedBirds.push(this.newBird)
          this.newBird = ''
        },
        addNoise() {
          this.noises[this.newNoise.bird] = this.newNoise.noise
          this.newNoise.bird = ''
          this.newNoise.noise = ''
      }
  }
})

app.mount('#app')