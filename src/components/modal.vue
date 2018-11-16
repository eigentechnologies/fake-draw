<script>
export default {
  name: 'modal',
  props: ['drawObject'],
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<template>
<div class="modal-backdrop">
  <div class="modal">
    <!-- <header class="modal-header">
      <slot name="header"><button type="button" class="btn-close" @click="close">
          x
        </button>
      </slot>
    </header> -->
    <section class="modal-body">
      <span>draw a </span>
      <slot name="body">
        <h1 class="object-name">
          {{ this.drawObject }}
        </h1>
      </slot>
    </section>
    <footer class="modal-footer">
      <slot name="footer">
        <button type="button" class="btn-green" @click="close">
          Let's Draw!
        </button>
      </slot>
    </footer>
  </div>
</div>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 300px;
  background: #FFFFFF;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: center;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-body .object-name {
  text-transform: capitalize;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  cursor: pointer;
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>
