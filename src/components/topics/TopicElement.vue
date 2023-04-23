<template>
    <li>
        <h3>{{ topicName }}</h3>
        <p>{{ description }}</p>
        <button @click="$emit('select-topic', id)">Learn More</button>
    </li>
</template>

<script>
export default {
    props: ['id', 'topicName', 'description'],
    emits: ['select-topic'],
};
</script>

<style scoped>
li {
    list-style-type: none;
}
h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-shadow: 2px 2px 3px rgb(99, 93, 93);
}
p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>