<template>
    <section>
        <h2>Select a topic</h2>
        <!-- <topic-grid @select-topic="$emit('select-topic', $event)"></topic-grid>
        <topic-grid-two @select-topic="$emit('select-topic', $event)"></topic-grid-two> -->
        <!-- :topics="topics" (was inside <topic-grid) -->
        <button @click="setSelectedPage('topic-grid')">Heroes</button>
        <button @click="setSelectedPage('topic-grid-three')">Neutrals</button>
        <button @click="setSelectedPage('topic-grid-two')">Villains</button>
    </section>
    <component :is="selectedPage" @select-topic="$emit('select-topic', $event)"></component>
</template>

<script>
export default {
    // props: ['topics'],
    emits: ['select-topic'],
    data() {
        return {
            selectedPage: 'topic-grid'
        };
    },
    methods: {
        setSelectedPage(page) {
            this.selectedPage = page;
        }
    }
};
</script>

<style scoped>
h2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgb(178, 180, 163);
    text-shadow: 2px 2px 3px rgb(51, 48, 48);
}
button {
    padding: 10px;
    margin: 3px;
}
</style>