<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    components: {
    },
    data() {
        return {
            projects: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getPosts(){
                axios.get(this.apiUrl)
                .then((response)=>{
                    // console.log(response.data.data)
                    this.projects = response.data.data
                })
                .catch(function (error){
                    console.log(error);
                })
            }
    },
    created(){
        this.getPosts()
    }
};
</script>

<template>
    <main class="d-flex flex-wrap">
        <div class="card m-5" v-for="project in projects" >
            <div class="card-header">
                <h3>{{project.title}}</h3>
            </div>
            <div class="card-body">
                <h5 class="card-title">Created by: {{project.user.name}}</h5>
                <p class="card-text">Type: {{project.type.name}}</p>
                <p v-if="project.technologies[0] != null">Technologies: <span v-for="tech in project.technologies">{{ tech.name }}&nbsp;</span></p>
                <p class="card-text">{{project.description.substr(0, 100)}}</p>
                <a :href="project.link" class="btn btn-primary">See the project site</a>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .card{
        width: calc(100% / 5 - 6rem);
    }
</style>