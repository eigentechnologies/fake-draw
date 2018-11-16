<template>
  <main>
    <h1>{{ state.drawObject }}</h1>
    <Paper v-on:drawing="isDrawing"
      v-bind:drawObject="state.drawObject"
    />
    <modal v-on:close="letsDraw"
      v-if="state.showModal"
      v-bind:drawObject="state.drawObject"
    />
  </main>
</template>

<script>
import faker from 'faker';
import Paper from './paper'
import modal from './modal'
import { sayMessage, getRandomMessage } from '../helpers'
export default {
  name: 'Main',
  components: {
    Paper,
    modal
  },
  mounted() {
    this.$nextTick(function() {
      console.log('UPDATED!');
    })
  },
  data: function () {
    return {
      state: {
        showModal: true,
        hasDrawn: false,
        isDrawing: false,
        drawObject: `${faker.hacker.noun()} ${faker.company.catchPhraseNoun()}`
      }
    }
  },
  methods: {
    letsDraw: function() {
      var that = this;
      this.state.showModal = false;
      setTimeout(function() {
        if (that.state.hasDrawn) {
          sayMessage(getRandomMessage());
          that.state.isDrawing = false
        }
      }, 2000);
      setTimeout(function() {
        if (that.state.isDrawing) {
          sayMessage('that looks like ' + that.state.drawObject);
          setTimeout(function() {
            that.state = {
              ...that.state,
              drawObject: `${faker.hacker.noun()} ${faker.company.catchPhraseNoun()}`,
              showModal: true
            };
          }, 3000);
        }
        else {
          if (that.state.hasDrawn) {
            sayMessage('I dont know what that is');
          }
          else {
            that.state = {
              ...that.state,
              drawObject: `${faker.hacker.noun()} ${faker.company.catchPhraseNoun()}`,
              showModal: true
            }
          }
        }
      }, 5000);
    },
    isDrawing: function() {
      if (!this.state.isDrawing) {
        this.state.isDrawing = true;
        this.state.hasDrawn = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
