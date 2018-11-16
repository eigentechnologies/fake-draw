<template>
  <Modal>
    <div>
      <span class="message"></span>
      <h1 class="object">fbfbndgn</h1>
      <button></button>
    </div>
  </Modal>
</template>

<script>
import Modal from './modal';
export default {
  name: 'Start',
  components: {
    Modal
  },
  methods: {
    makeList: function() {
      let list = [];
      for (let i = 0; i < 6; i++) {
        list.push(`${faker.hacker.noun()} ${faker.company.catchPhraseNoun()}`);
      }
      console.log(list);
    }
  }
}
</script>

<style scoped>

</style>
