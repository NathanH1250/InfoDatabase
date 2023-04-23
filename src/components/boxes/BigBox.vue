<template>
    <li>
        <base-card>
            <h3>{{ title }}</h3>
            <li>
                <strong>
                    Extra Info:
                </strong>
                {{ info }}
            </li>
            <button @click="makeVisible">{{ isVisible ? 'Hide secret' : 'Show secret' }}
                <ul v-if="isVisible">
                    <h2>{{ text }}</h2>
                </ul>
            </button>
        </base-card>
    </li>
</template>

<script>
export default {
    props: [
        'title',
        'info',
        'topicTitle',
        'text'
    ],
data() {
    return {
        isVisible: false,
        images: [
            'https://toppng.com/uploads/preview/dirt-splatter-png-11552290260uhsvi8cymd.png'
        ],
        boxItem: {
            name: "box"
            },
        }
    },
    methods: {
        makeVisible() {
            this.isVisible = !this.isVisible;
        }
    }
}
</script>

<style scoped>
h3 {
    color: rgb(206, 209, 24);
    text-align: center;
    text-shadow: 2px 2px 3px rgb(73, 68, 68);

}
li {
    text-align: center;
    list-style-type: none;
}
h2 {
    text-align: center;
    text-shadow: 2px 2px 3px rgb(59, 55, 55);

}
</style>