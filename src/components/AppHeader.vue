<template>
    <nav>
        <ul>
            <li v-for="link in links">
                <router-link :to="{ name: link.route }">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            links : [
                {
                    route: 'projects',
                    name: 'Projects'
                },
                {
                    route: 'about',
                    name: 'About Us'
                },
            ]
        }
    },
}
</script>

<style lang="scss">
    nav{
        width: 100%;
        padding: 1rem 3rem;
        background-color: rgb(232, 232, 232);
        color: black;

        ul{
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 2rem;
            list-style-type: none;

            li{
                margin-right: 2rem;
                a {
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }
</style>