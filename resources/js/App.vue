<template>
    <div>
        <navbar :app="this"></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "./layouts/Navbar";
    export default {
        name: "app",
        components: {
            Navbar
        }
    }
</script>

<style lang="scss" scoped>

</style>