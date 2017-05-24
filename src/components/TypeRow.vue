<template>
  <tr>
	<td class="key" @mouseenter="hideAddButton = !hideAddButton" @mouseleave="hideAddButton = !hideAddButton">
	 <input type="text" placeholder="enter the key"
	 v-bind:style="{'padding-left': `${padding}px`}"
	 v-if="!isArrayItem"
	 v-model="keyname"
	 >
	 <label v-bind:style="{'padding-left': `${padding}px`}" v-else>
	 	{{ keyname }}
	 </label>
	 <button v-if="hideAddButton" @click="addNewRow">+</button>
	 <button v-if="hideAddButton" @click="removeRow">-</button>
	</td>
	<td class="type">
	<select v-model="selectedDataType">
  		<option v-for="dataType in dataTypes" v-bind:value="dataType">
    		{{ dataType }}
  		</option>
	</select>
	</td>	
	<td class="value">
		<input v-if="!isCollection" type="text" v-model="value" placeholder="enter the value">
		<label v-else>{{ value }}</label>
	</td>
	<td class="times">
		<input type="number" min="1" value="1" v-model="times">
	</td>
</tr>
</template>

<script>
	export default {
		data: function() {
			return {
				hideAddButton: false,
				selectedDataType: this.dataType || "Dictionary",
				dataTypes: [
					"Dictionary",
					"Array",
					"String",
					"Number",
					"Boolean",
				],
			};
		},
		props: ['parentname', 'keyname', 'dataType', 'value', 'times', 'isArrayItem', 'padding'],
		computed: {
			isCollection() {
				return this.selectedDataType === "Dictionary" || this.selectedDataType === "Array";
			},
		},
		watch: {
			selectedDataType(newType, oldType) {
				if (newType !== "Dictionary" && newType !== "Array" && (oldType === "Array" || oldType === "Dictionary")) {
					this.$emit('removeChild', this.keyname);
				};
			} ,
		},
		methods: {
			expandRow() {

			},

			addNewRow() {
				const childIsArrayItem = ((this.isArrayItem && this.selectedDataType !== "Dictionary") || this.selectedDataType === "Array");
				this.$emit('addNewRow', childIsArrayItem, this.isCollection ? this.keyname : this.parentname, this.isCollection ? this.padding + 20 : this.padding);
			},

			removeRow() {
				this.$emit('remove');
			},


		}
	}
</script>

<style scoped>
	.key {
		text-align: left;
		width: 300px;
	}
	.key input { 
		width: 100px;
	}
</style>

