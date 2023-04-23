<template>
    <section>
        <h2>{{ topicTitle }}</h2>
        <p>{{ text }}</p>
    </section>
</template>

<script>
export default {
    props: ['topicTitle', 'text'],
};
</script>

<style scoped>
section {
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.05rem;
    padding-bottom: 5px;
    margin: 2rem auto;
    max-width: 45rem;
    background-color: rgb(224, 213, 140);
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-image: url('./tan background.jpg'); 
    color: rgb(54, 54, 44);
    text-shadow: 2px 2px 10px rgb(99, 93, 93);
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.8);
}
</style>