<template lang="">
    <article class="single-project w-50 mx-auto text-center">
        <h2>
            {{ project.title }}
        </h2>
        <div class="img-wrapper">
            <img v-if="project.image.startsWith('http')" :src="project.image" alt="">
            <img v-else :src="'http://127.0.0.1:8000/storage/' + project.image" alt="">
        </div>
        <h3>
            Written by: {{ project.user.name }}
        </h3>
        <h4>
            Type: {{project.type.name}}
        </h4>
        <h4 v-if="project.technologies[0] != null" >
            Technologies: <span v-for="tech in project.technologies" :style="'color:' + tech.color + ';'">{{ tech.name }}&nbsp;</span>
        </h4>
        <p>
            {{ project.description.substr(0, 250) }}
        </p>
    </article>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    components: {
    },
    data() {
        return {
            apiUrl : 'http://127.0.0.1:8000',
            project: [],
        }
    },
    methods: {
        getSingleProject(){
            console.log(this.$route.params.id);
            axios.get(`${this.apiUrl}/api/projects/${this.$route.params.id}`).then((response) => {
                console.log(response);
                this.project = response.data.results;
            }).catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    },

    created() {
        this.getSingleProject();
    },
}
</script>

<style lang="scss" scoped>
    article.single-post{
        padding-top: 2rem;
        width: 100%;
        border-radius: 1rem;
        padding: 1rem;
        margin-right: 1rem;
        background-color: rgb(221, 221, 221);
        color: black;
        margin-bottom: 2rem;

        *{
            margin-bottom: 1rem;
        }

        img{
            width: 100%;
            height: 10rem;
            object-fit: cover;
        }

        h6 span{
            margin-right: 1rem;
        }

        &:hover{
            background-color: white;
        }
    }
</style>