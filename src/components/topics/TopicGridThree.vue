<template>
    <ul>
        <topic-card>
            <topic-element
                v-for="neutralTopic in topicsThree"
                :key="neutralTopic.id"
                :id="neutralTopic.id"
                :topic-name="neutralTopic.title"
                :description="neutralTopic.description"
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


