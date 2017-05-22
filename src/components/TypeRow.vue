<template>
  <tr>
	<td @mouseenter="hidden = !hidden" @mouseleave="hidden = !hidden"><input type="text" v-model="keyname" placeholder="enter the key"> <button v-if="hidden" @click="addNewRow">+</button><button v-if="hidden" @click="removeRow">-</button></td>
	<td><button @click="changeDataType">{{ dataType }}</button></td>
	<td><input type="text" v-model="value" placeholder="enter the value"></td>
	<td><input type="number" min="1" value="1"></td>
</tr>
</template>

<script>
	export default {
		data: function() {
			return {
				hidden: false,
			};
		},
		props: ['keyname', 'dataType', 'value', 'times'],
		methods: {
			changeDataType() {
				if (this.dataType === "Dictionary") {

				}else if (this.dataType === "Array") {

				}else if (this.dataType === "String") {

				}else if (this.dataType === "Number") {

				}else if (this.dataType === "Boolean") {

				}
				alert(this.dataType);
			},
			addNewRow() {
				this.$emit('addNewRow');
			},
			removeRow() {
				this.$emit('remove');
			}
		}
	}
</script>