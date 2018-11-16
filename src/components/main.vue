<template>
  <main>
    <Paper />
    <modal v-on:close="closeModal" v-if="state.showModal" />
  </main>
</template>

<script>
import Paper from './paper'
import modal from './modal'
export default {
  name: 'Main',
  components: {
    Paper,
    modal
  },
  data: function () {
    return {
      state: {
        showModal: true
      }
    }
  },
  methods: {
    closeModal: function() {
      this.state.showModal = false;
      console.log('close clicked');
    }
  }
}
</script>

<style scoped>

</style>
