<template>
	<div class="generator">
		<h1>This is a request generator!</h1>
		<h3>setup your request</h3>
		<label name="url">request URL: </label><input type="text"></br>
		<label name="parameters">request parameters: </label><input type="text">
		<h3>setup your response</h3>
		<label name="url">response type: </label>
		<button>string +</button>
		<button>number +</button>
		<button>bool +</button>
		<button>array +</button>
		<button>map +</button>
		<ul>
			<li v-for="todo in todos">
				{{ todo }}
			</li>
		</ul>
		</br>
		<button @click="submit">submit</button>
	</div>
</template>

<script>
	export default {
		name: 'generator',
		data() {
			return {
				todos: [
					"first",
					"second",
					"third",
				],
			};
		},
		methods: {
			submit: function (event) {
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
	};
</script>

<style scoped>
	
</style>

