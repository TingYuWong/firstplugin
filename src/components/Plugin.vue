<template>
    <div class="plugin">{{ txt }}</div>
</template>

<script>
export default {
    name: 'Plugin',
    props: {
        txt: {
            type: String,
            default: 'DEFAULT TEXT'
        }
    },
}
</script>

<style scoped>
.plugin {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    background-color: rgb(80, 71, 255);
    color: #fff;
}
</style>