<template>
    <ul>
        <topic-card>
            <topic-element
                v-for="villainTopic in topicsTwo"
                :key="villainTopic.id"
                :id="villainTopic.id"
                :topic-name="villainTopic.title"
                :description="villainTopic.description"
                @select-topic="$emit('select-topic', $event)"
            ></topic-element>
        </topic-card>
    </ul>

</template>

<script>
export default {
    // props: ['topics'],
    inject: ['topics', 'topicsTwo'],
    emits: ['select-topic'],
    props: ['pageId'],
};
</script>


