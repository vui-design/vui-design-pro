<template>
  <div class="vui-user-profile-tags">
    <div class="vui-user-profile-tags-header">标签</div>
    <div class="vui-user-profile-tags-body">
      <vui-tag v-for="tag in tags" v-bind:key="tag">{{tag}}</vui-tag>
      <vui-input
        v-if="showInput"
        v-model="value"
        v-bind:value="value"
        v-on:blur="handleCancel"
        v-on:keyup.enter="handleSubmit"
        ref="input"
        size="small"
        style="width: 80px;"
      />
      <vui-button v-else size="small" icon="plus" v-on:click="handleAdd" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: ["Vuejs", "Framework", "Components", "UI", "Vui Design", "Vui Design Pro"],
        showInput: false,
        value: ""
      };
    },
    methods: {
      handleAdd() {
        this.showInput = true;
        this.$nextTick(() => this.$refs.input.focus());
      },
      handleCancel() {
        this.showInput = false;
        this.value = "";
      },
      handleSubmit() {
        if (this.value && this.tags.indexOf(this.value) === -1) {
          this.tags.push(this.value);
        }

        this.handleCancel();
      }
    }
  };
</script>

<style>
  .vui-user-profile-tags {  }
  .vui-user-profile-tags-header { margin-bottom:16px; }
  .vui-user-profile-tags-body {  }
  .vui-user-profile-tags-body:before, .vui-user-profile-tags-body:after { content:""; display:block; width:100%; height:0; visibility:hidden; clear:both; }
  .vui-user-profile-tags-body > .vui-tag,
  .vui-user-profile-tags-body > .vui-input,
  .vui-user-profile-tags-body > .vui-button { float:left; margin-right:8px; margin-bottom:8px; }
</style>