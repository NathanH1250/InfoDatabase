<template>
    <li>
        <base-card>
            <h3>{{ name }}</h3>
            <h5>{{ number }}</h5>
                <button @click="$emit('deletebox', boxId)">Shoo away</button>
            </base-card>
    </li>
</template>


<script>
export default {
    props: [
        'id',
        'name',
        'number'
],
emits: ['toggle-favorite', 'deletebox'],
data() {
    return {
        boxItem: {
            id: "one",
            name: "box one",
            number: "one"
            },
        }
    },
}
</script>

<style scoped>
h3 {
    color: rgb(54, 54, 44);
    text-align: center;
    text-shadow: 2px 2px 3px rgb(99, 93, 93);

}
li {
    list-style-type: none;
}
</style>