<template>
  <div class="vui-filter">
    <vui-filter-group
      v-for="(item, index) in options"
      v-bind:key="item.key"
      v-bind:class="index % 2 == 0 ? 'even' : 'odd'"
      v-bind:label="item.label"
      v-bind:name="item.key"
      v-bind:value="state.value[item.key]"
      v-bind:options="item.options"
      v-on:change="handleGroupChange"
    />
  </div>
</template>

<script>
  import VuiFilterGroup from "./filter-group";

  export default {
    components: {
      VuiFilterGroup
    },
    props: {
      value: {
        type: Object,
        default: () => ({})
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        state: {
          value: {}
        }
      };
    },
    watch: {
      value: {
        immediate: true,
        deep: true,
        handler(value) {
          this.state.value = this.getValueFromProps(value, this.options);
        }
      }
    },
    methods: {
      getValueFromProps(value, options) {
        let stateValue = {};

        options.forEach(option => {
          const selection = value[option.key];

          stateValue[option.key] = selection ? [...selection] : [];
        });

        return stateValue;
      },
      handleGroupChange(key, value) {
        this.state.value[key] = value;
        this.$emit("input", this.state.value);
        this.$emit("change", this.state.value);
      }
    }
  };
</script>

<style>
  .vui-filter { border-radius:2px; overflow:hidden; }
</style>