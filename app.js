function getRandomAttackVal(min, max) {
  return Math.floor(Math.random() * (min, max)) + max;
}
// im using a separate function to show both ways of formulating attack

let app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerOneHealth: 100,
      roundJugado: 0,
    };
  },
  computed: {
    monsterBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerBar() {
      return { width: this.playerOneHealth + "%" };
    },
    // by attaching this computed method to html where triple attack currently is
    // we can get the same outcome as triple attach
    // especialAttack() {
    //   this.roundJugado % 3 !== 0;
    // },
  },

  methods: {
    attackMonster() {
      this.roundJugado++;
      let attackVal = getRandomAttackVal(9, 11);
      this.monsterHealth -= attackVal;
      this.attackPlayer();
    },
    attackPlayer() {
      let attackVal = Math.floor(Math.random() * (12 - 8)) + 8;
      this.playerOneHealth -= attackVal;
    },
    tripleAttack() {
      this.roundJugado++;
      let attackVal = Math.floor(Math.random() * (15 - 9)) + 9;
      this.monsterHealth -= attackVal;
      this.attackPlayer();
    },
    healJugador() {
      this.roundJugado++;
      let healValor = Math.floor(Math.random() * (12 - 9)) + 9;
      if ((this.playerOneHealth += healValor > 100)) {
        this.playerOneHealth = 100;
      } else {
        this.playerOneHealth += healValor;
      }
      this.attackPlayer();
    },
  },
});
app.mount("#game");
