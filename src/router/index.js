import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Generator from '@/components/Generator';
import Result from '@/components/Result';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/generator',
      name: 'generator',
      component: Generator,
    },
    {
    	path: '/result',
    	name: 'result',
    	component: Result,
    },
  ],
});
