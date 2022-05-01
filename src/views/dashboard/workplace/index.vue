<template>
  <div class="vui-design-pro-page">
    <vui-page-header class="vui-design-pro-page-header" v-bind:ghost="false" title="工作台">
      <vui-details />
    </vui-page-header>
    <div class="vui-design-pro-page-body">
      <vui-row v-bind:gutter="16">
        <vui-col v-bind:span="16">
          <vui-project-list />
          <vui-event-list />
        </vui-col>
        <vui-col v-bind:span="8">
          <vui-shortcut-list />
          <vui-todo-list />
          <vui-radar />
        </vui-col>
      </vui-row>
    </div>
  </div>
</template>

<script>
  import VuiDetails from "./details";
  import VuiProjectList from "./project-list";
  import VuiEventList from "./event-list";
  import VuiShortcutList from "./shortcut-list";
  import VuiTodoList from "./todo-list";
  import VuiRadar from "./radar";

  export default {
    components: {
      VuiDetails,
      VuiProjectList,
      VuiEventList,
      VuiShortcutList,
      VuiTodoList,
      VuiRadar
    }
  };
</script>