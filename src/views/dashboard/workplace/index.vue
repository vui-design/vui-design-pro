<template>
	<div class="vui-pro-page">
		<vui-pro-page-header />
		<div class="vui-pro-page-body">
			<vui-row v-bind:gutter="20">
				<vui-col v-bind:span="16">
					<vui-pro-project-list />
					<vui-pro-event-list />
				</vui-col>
				<vui-col v-bind:span="8">
					<vui-pro-shortcut-list />
					<vui-pro-todo-list />
					<vui-pro-radar />
				</vui-col>
			</vui-row>
		</div>
	</div>
</template>

<script>
	import VuiProPageHeader from "./components/page-header";
	import VuiProProjectList from "./components/project-list";
	import VuiProEventList from "./components/event-list";
	import VuiProShortcutList from "./components/shortcut-list";
	import VuiProTodoList from "./components/todo-list";
	import VuiProRadar from "./components/radar";

	export default {
		components: {
			VuiProPageHeader,
			VuiProProjectList,
			VuiProEventList,
			VuiProShortcutList,
			VuiProTodoList,
			VuiProRadar
		},
		data() {
			return {

			};
		}
	};
</script>