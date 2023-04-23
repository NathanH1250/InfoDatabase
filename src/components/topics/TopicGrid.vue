<template>
    <ul>
        <topic-card>
            <topic-element
                v-for="topic in topics"
                :key="topic.id"
                :id="topic.id"
                :topic-name="topic.title"
                :description="topic.description"
                @select-topic="$emit('select-topic', $event)"
            ></topic-element>
        </topic-card>
    </ul>

</template>

<script>
export default {
    // props: ['topics'],
    inject: ['topics', 'topicsTwo', 'topicsThree'],
    emits: ['select-topic'],
    props: ['pageId'],
};
</script>


