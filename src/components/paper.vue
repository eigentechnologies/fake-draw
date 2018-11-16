<template>
<canvas id="paper"></canvas>
</template>

<script>
import CanvasFreeDrawing from 'canvas-free-drawing'

export default {
  name: 'Paper',
  data: function () {
    return {
      paper: null
    }
  },
  methods: {
    isDrawing: function() {
      this.$emit('drawing');
    }
  },
  props: ['drawObject'],
  watch: {
  	drawObject: function(newVal, oldVal) { // watch it
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      if (newVal !== oldVal) {
        this.paper.clear()
      }
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      // initialize
      that.paper = new CanvasFreeDrawing({
        elementId: 'paper',
        width: 750,
        height: 500
      });

      // set properties
      that.paper.setLineWidth(10); // in px
      that.paper.setStrokeColor([0, 0, 255]); // in RGB

      // listen to events
      that.paper.on({
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
