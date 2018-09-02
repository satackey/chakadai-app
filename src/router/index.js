import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Root from '@/components/Root';
import Printing from '@/components/Printing';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'Root',
      component: Root,
    },
    {
      path: '/printing',
      name: 'Printing',
      component: Printing,
    },
  ],
});
