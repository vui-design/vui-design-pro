<template>
  <vui-upload
    class="vui-avatar-uploader"
    v-bind:class="disabled ? 'vui-avatar-uploader-disabled' : ''"
    v-bind:accept="accept"
    v-bind:showList="showList"
    v-bind:action="action"
    v-bind:beforeUpload="beforeUpload"
    v-bind:disabled="disabled"
    v-on:change="handleChange"
  >
    <div class="vui-avatar-uploader-image">
      <img v-if="image" v-bind:src="image" />
      <img v-else src="images/avatars/svg1.svg" />
    </div>
    <div v-if="showButton && !disabled" class="vui-avatar-uploader-action">
      <vui-button v-bind:loading="loading" icon="upload" block>更换头像</vui-button>
    </div>
  </vui-upload>
</template>

<script>
  import Emitter from "src/mixins/emitter";
  import config from "src/config";
  import authorization from "src/libs/authorization";

  export default {
    mixins: [
      Emitter
    ],
    props: {
      value: {
        type: String,
        default: undefined
      },
      showButton: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        accept:"image/png, image/gif, image/jpeg",
        listType: "picture-card",
        showList: false,
        action: "//www.mocky.io/v2/5cc8019d300000980a055e76",
        image: this.value,
        loading: false
      };
    },
    watch: {
      value(value) {
        this.image = value;
      }
    },
    methods: {
      beforeUpload(file) {
        const isImage = ["image/png", "image/gif", "image/jpeg"].indexOf(file.type) > -1;

        if (!isImage) {
          this.$message.error("只允许上传 png, gif, jpg, jpeg 格式的图标");
        }

        const isLessThan2M = file.size / 1024 / 1024 < 2;

        if (!isLessThan2M) {
          this.$message.error("图标大小不允许超过 2MB");
        }

        return isImage && isLessThan2M;
      },
      handleChange(file) {
        if (file.status == "progress") {
          this.loading = true;
        }
        else if (file.status == "error") {
          this.loading = false;
        }
        else if (file.status == "success") {
          this.loading = false;

          const response = file.response;

          if (response.code === 0) {
            this.image = response.data["host"] + response.data["path"];
            this.$emit("input", this.image);
            this.$emit("change", this.image);
            this.dispatch("vui-form-item", "change", this.image);
          }
          else {
            this.$message.error(response.message);
          }
        }
      }
    }
  };
</script>

<style>
  .vui-avatar-uploader { width:120px; }
  .vui-avatar-uploader .vui-avatar-uploader-image { cursor:pointer; display:block; width:120px; height:120px; border-radius:2px; overflow:hidden; }
  .vui-avatar-uploader .vui-avatar-uploader-image img { display:block; width:100%; height:100%; object-fit:cover; object-position:center; }
  .vui-avatar-uploader .vui-avatar-uploader-action { cursor:pointer; display:block; margin-top:12px; }

  .vui-avatar-uploader-disabled {  }
  .vui-avatar-uploader-disabled .vui-avatar-uploader-image { cursor:default; }
  .vui-avatar-uploader-disabled .vui-avatar-uploader-image img {  }
  .vui-avatar-uploader-disabled .vui-avatar-uploader-action { cursor:default; display:none; }
</style>