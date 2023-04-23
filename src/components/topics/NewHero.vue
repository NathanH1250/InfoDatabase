<template>
    <base-card>
    <form @submit.prevent="submitData">
        <div class="imageUploader">
            <input type="file" @change="onFileSelected">
            <button @click="uploadImage">Upload</button>
        </div>
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredHeroName" />
        </div>
        <div>
            <label>ID</label>
            <input type="text" v-model="newHeroId" />
        </div>
        <div>
            <label>Hero Description</label>
            <input type="text" v-model="enteredHeroDescription" />
        </div>    
        <div>
            <label>Hero Text</label>
            <input type="text" v-model="enteredHeroText" />
        </div>                               
        <div>
            <button>Add Hero</button>
        </div>
    </form>
    </base-card>
</template>

<script>
    import axios from 'axios'

    export default {
        emits: ['add-hero'],
        data() {
            return {
            selectedFile: null,
            newHeroId: '',
            enteredHeroName: '',
            enteredHeroDescription: '',
            enteredHeroText: ''
            };
        },
        methods: {
            submitData() {
                this.$emit(
                    'add-hero', 
                    this.selectedFile,
                    this.newHeroId,
                    this.enteredHeroName, 
                    this.enteredHeroDescription,
                    this.enteredHeroText
                );
            },
            methods: {
                onFileSelected(event) {
                    this.selectedFile = event.target.files[0]
                },
                onUpload() {
                    axios.post('')
                }
            }
        },
    };
</script>



<style scoped>
input {
  font: inherit;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
form div {
  margin: 1rem 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>