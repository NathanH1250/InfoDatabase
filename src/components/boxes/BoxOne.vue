<template>
    <li>
        <base-card>
            <header>
                <h3>{{ title }}</h3>
                <base-button>Delete</base-button>
            </header>
            <p>{{ description }}</p>
        </base-card>
    </li>
</template>

<script>

export default {
    props: ['title', 'description']
}
</script>