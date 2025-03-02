import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppSedi from './pages/AppSedi.vue';
import AppCorsi from './pages/AppCorsi.vue';
import AppMaestro from './pages/AppMaestro.vue';
import AppAccademia from './pages/AppAccademia.vue';
import AppCompetition from './pages/AppCompetition.vue';
import AppContatti from './pages/AppContatti.vue';
const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/corsi',
            name: 'corsi',
            component: AppCorsi
        },

        {
            path: '/maestro',
            name: 'maestro',
            component: AppMaestro
        },
        
        {
            path: '/accademia',
            name: 'accademia',
            component: AppAccademia
        },
       
        {
            path: '/sedi',
            name: 'sedi',
            component: AppSedi
        },
        {
            path: '/competition',
            name: 'competition',
            component: AppCompetition
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: AppContatti
        }
    ]
});

export { router };