<template>
  <div class="vui-filter-group">
    <div class="vui-filter-group-header">
      <div class="label">{{label}}</div>
    </div>
    <div class="vui-filter-group-body">
      <vui-row v-bind:gutter="20" v-bind:class="collapsed ? 'collapsed' : ''">
        <vui-col key="0" v-bind:xs="12" v-bind:sm="8" v-bind:md="6" v-bind:lg="4" v-bind:xl="3" v-bind:xxl="2">
          <div class="vui-filter-group-option">
            <vui-checkbox v-bind="checkboxAllProps" v-on:change="handleToggleAll">全部</vui-checkbox>
          </div>
        </vui-col>
        <vui-col v-for="(option, index) in options" v-bind:key="option.value" v-bind:xs="12" v-bind:sm="8" v-bind:md="6" v-bind:lg="4" v-bind:xl="3" v-bind:xxl="2">
          <div class="vui-filter-group-option">
            <vui-checkbox v-bind:value="option.value" v-bind:checked="state.value.includes(option.value)" v-on:change="checked => handleToggle(checked, option.value)">{{option.label}}</vui-checkbox>
          </div>
        </vui-col>
      </vui-row>
    </div>
    <div class="vui-filter-group-footer">
      <a href="javascript:;" class="btn-more link-default" v-on:click="handleCollapse">
        <template v-if="collapsed">展开<vui-icon type="chevron-down" /></template>
        <template v-else>收起<vui-icon type="chevron-up" /></template>
      </a>
    </div>
  </div>
</template>

<script>
  const isArrayEqualed = function(array, other) {
    let i;
    let length;

    if (!other) {
      return false;
    }

    if (array.length !== other.length) {
      return false;
    }

    for (i = 0, length = array.length; i < length; i++) {
      if (array[i] instanceof Array && other[i] instanceof Array) {
        if (!array[i].equals(other[i])) {
          return false;
        }
      }
      else if (array[i] !== other[i]) {
        return false;
      }
    }

    return true;
  };

  export default {
    props: {
      label: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      },
      value: {
        type: Array,
        default: () => []
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        collapsed: true,
        state: {
          value: []
        }
      };
    },
    computed: {
      checkboxAllProps() {
        return {
          indeterminate: this.state.value.length > 0 && this.options.some(option => this.state.value.includes(option.value)),
          checked: this.state.value.length > 0 && this.options.every(option => this.state.value.includes(option.value))
        };
      }
    },
    watch: {
      value: {
        immediate: true,
        deep: true,
        handler(value) {
          this.state.value = [...value];
        }
      }
    },
    methods: {
      handleCollapse() {
        this.collapsed = !this.collapsed;
      },
      handleToggleAll(checked) {
        if (checked) {
          this.state.value = this.options.map(option => option.value);
          this.handleChange();
        }
        else {
          this.state.value = [];
          this.handleChange();
        }
      },
      handleToggle(checked, value) {
        if (checked) {
          const index = this.state.value.indexOf(value);

          if (index > -1) {
            return;
          }

          this.state.value.push(value);
          this.handleChange();
        }
        else {
          const index = this.state.value.indexOf(value);

          if (index === -1) {
            return;
          }

          this.state.value.splice(index, 1);
          this.handleChange();
        }
      },
      handleChange() {
        const stateValue = [...this.state.value];

        this.$emit("input", this.name, stateValue);
        this.$emit("change", this.name, stateValue);
      }
    }
  };
</script>

<style>
  .vui-filter-group { position:relative; display:flex; align-items:flex-start; }
  .vui-filter-group-header { display:flex; align-items:center; width:120px; padding:8px 0; }
  .vui-filter-group-header .label { flex:1; display:block; height:32px; padding:0 16px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; color:#262626; line-height:32px; }
  .vui-filter-group-body { flex:1; padding:8px 0; overflow:hidden; }
  .vui-filter-group-body .vui-row { height:auto; overflow:hidden; transition:all 0.2s; }
  .vui-filter-group-body .vui-row.collapsed { height:32px; }
  .vui-filter-group-body .vui-filter-group-option { display:flex; padding:6px 0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
  .vui-filter-group-footer { display:flex; padding:8px 0; line-height:32px; }
  .vui-filter-group-footer .btn-more { flex:1; display:block; align-items:center; height:32px; padding:0 16px; }
  .vui-filter-group-footer .btn-more .vui-icon { margin-left:4px; transform:scale(0.6); }

  .vui-filter-group + .vui-filter-group { margin-top:1px; }
  .vui-filter-group.even { background-color:#fff; }
  .vui-filter-group.odd { background-color:#fafafa; }
</style>