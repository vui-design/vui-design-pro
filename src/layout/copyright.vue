<template>
  <div style="margin-top: 8px;">Copyright © {{year}} Coding by Ding Wei</div>
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      };
    },
  };
</script>