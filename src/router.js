import { createRouter, createWebHistory } from "vue-router";

import AboutUs from './components/AboutUs.vue';
import SingleProject from './components/SingleProject.vue';
import Projects from './components/Projects.vue';


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name : 'projects',
            component : Projects,
        },
        {
            path: '/about-us',
            name : 'about',
            component : AboutUs,
        },
        {
            path: '/projects/:id',
            name : 'projects.show',
            component : SingleProject,
        },
    ]
})

export { router };