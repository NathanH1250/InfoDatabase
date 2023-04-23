<template>
    <div>
        <slot>
            
        </slot>
    </div>
</template>

<style scoped>
div {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
    background-color: rgb(224, 213, 140);
    background-image: url('./tan background.jpg'); 
    color: rgb(54, 54, 44);
    box-shadow: 5px 3px 2px 2px rgba(0,0,0,.8);
    text-shadow: 2px 2px 3px #FFF;
}
template {
    box-shadow: 5px 5px 10px 2px rgba(179, 29, 29, 0.8);
    text-shadow: 2px 2px 3px rgb(99, 93, 93);

}
</style>