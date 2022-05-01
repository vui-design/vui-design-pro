<template>
  <vui-menu mode="inline" theme="dark" v-bind:collapsed="collapsed" v-bind:openNames="openedSubmenus" v-bind:selectedName="selectedMenuItem">
    <template v-for="(first, firstIndex) in menu">
      <vui-submenu v-if="first.children" v-bind:key="first.path" v-bind:name="first.path" v-bind:icon="first.meta && first.meta.icon" v-bind:title="first.meta && first.meta.title">
        <template v-for="(second, secondIndex) in first.children">
          <vui-submenu v-if="second.children" v-bind:key="second.path" v-bind:name="second.path" v-bind:title="second.meta && second.meta.title">
            <template v-for="(third, thirdIndex) in second.children">
              <vui-menu-item v-bind:key="third.path" v-bind:to="third.path" v-bind:name="third.path" v-bind:title="third.meta && third.meta.title" />
            </template>
          </vui-submenu>
          <vui-menu-item v-else v-bind:key="second.path" v-bind:to="second.path" v-bind:name="second.path" v-bind:title="second.meta && second.meta.title" />
        </template>
      </vui-submenu>
      <vui-menu-item v-else v-bind:key="first.path" v-bind:to="first.path" v-bind:name="first.path" v-bind:icon="first.meta && first.meta.icon" v-bind:title="first.meta && first.meta.title" />
    </template>
  </vui-menu>
</template>

<script>
  import { mapState } from "vuex";
  import routes from "src/routes";
  import utils from "src/libs/utils";

  export default {
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapState({
        user: state => state.user
      }),
      menu() {
        return utils.getMenuFromRoutes(routes, this.user.permissions);
      },
      openedSubmenus() {
        const paths = this.$route.matched.map(item => item.path);
        const start = 0;
        const end = paths.length - 1;

        return paths.slice(start, end);
      },
      selectedMenuItem() {
        const route = this.$route;
        const items = utils.flatten(this.menu, "children", true);
        let target;

        items.forEach(item => {
          const { path, meta } = item;

          if (meta && meta.addToMenu === false) {
            return;
          }

          if (route.path.indexOf(path) === -1) {
            return;
          }

          target = item;
        });

        return target ? target.path : "";
      }
    }
  };
</script>