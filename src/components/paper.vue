<template>
<canvas id="paper"></canvas>
</template>

<script>
import CanvasFreeDrawing from 'canvas-free-drawing'

export default {
  name: 'Paper',
  methods: {
    isDrawing: function() {
      this.$emit('drawing');
    }
  },
  mounted() {
    this.$nextTick(function() {
      // initialize
      const paper = new CanvasFreeDrawing({
        elementId: 'paper',
        width: 750,
        height: 500
      });

      // set properties
      paper.setLineWidth(10); // in px
      paper.setStrokeColor([0, 0, 255]); // in RGB

      // listen to events
      paper.on({
        event: 'redraw'
      }, () => {
        this.isDrawing();
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  border: 1px solid;
}
</style>
