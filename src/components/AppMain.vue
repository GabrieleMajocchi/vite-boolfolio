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
        
    </main>
</template>

<style lang="scss" scoped>
    
</style>