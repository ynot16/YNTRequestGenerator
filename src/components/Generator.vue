<template>
	<div class="generator">
		<h1>This is a request generator!</h1>
		<h3>setup your request</h3>
		<label name="url">request URL: </label><input type="text"></br>
		<label name="parameters">request parameters: </label><input type="text">
		<h3>setup your response</h3>
		<table id="data-table">
			<thead>
				<tr>
					<th>key</th>
					<th>type</th>
					<th>value</th>
					<th>times</th>
				</tr>
			</thead>
			<tbody>
				<type-row 
					v-for="(responseRow, index) in responseDic"
					:key="responseRow"
					:keyname="responseRow.keyname"
					:dataType="responseRow.dataType"
					:value="responseRow.value"
					:times="responseRow.times"
					@addNewRow="addNewData"
					@remove="responseDic.splice(index, 1)"
					></type-row>
			</tbody>
		</table>
		</br>
		<button @click="submitRequest">submit</button>
	</div>
</template>

<script>
	import TypeRow from './TypeRow';

	export default {
		name: 'generator',
		data: function() {
			return {
				responseDic: [
					{"keyname": "testKey", "dataType": "testDataType", "value": "testValue", "times": "2"},
				],
			};
		},
		methods: {
			addNewData() {
				this.responseDic.push('second');
			},

			submitRequest() {
				// body...
				function requestStringify() {
					const value = "hello";
					const requestString = `
							1、app.js文件导入子路由：const todos = require('./router/todo');
							2、app.js文件路由处添加：app.use(${value}, todos);
							'use strict';
							const router = require('express').Router();

							// 查询 Todo 列表
							router.get('/', function(req, res) {
							    console.log(req.query);
							    res.json({"todoTime": new Date()});
							});

							module.exports = router;
						`;
					return requestString;
				};

				const requestString = requestStringify();
				alert(requestString);
			},
		},
		components: {
			'type-row': TypeRow
		}
	};
</script>

<style scoped>
	
</style>

