<template>
    <base-card>
        <base-button>Show entry add section</base-button>
        <base-button>Hide entry add section</base-button>
    </base-card>
</template>

<script>

export default {
    components: {
        NewBox,
        NewHero,
        NewVillain
    },
    data() {
        return {
            selectedOption: 'hide-section',
            
        }
    }
}

</script>