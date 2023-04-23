<template>
    <header>
        <h1 id="main-title">{{ title }}</h1>
    </header>
</template>

<script>

export default {
    props: ['title']
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #660808;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./tan background.jpg'); 
  box-shadow: 0px 5px 5px 2px rgba(0,0,0,.8);
  text-shadow: 2px 2px 3px rgb(99, 93, 93);

}

header h1 {
  color: rgb(36, 31, 31);
  margin: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

#main-title {
  color: rgb(54, 54, 44);
}
</style>