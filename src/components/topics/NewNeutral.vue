<template>
    <base-card>
    <form @submit.prevent="submitData">
        <div class="imageUploader">
            <input type="file" @change="onFileSelected">
            <button @click="uploadImage">Upload</button>
        </div>
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredNeutralName" />
        </div>
        <div>
            <label>ID</label>
            <input type="text" v-model="newNeutralId" />
        </div>
        <div>
            <label>Neutral Description</label>
            <input type="text" v-model="enteredNeutralDescription" />
        </div>    
        <div>
            <label>Neutral Text</label>
            <input type="text" v-model="enteredNeutralText" />
        </div>                               
        <div>
            <button>Add Neutral</button>
        </div>
    </form>
    </base-card>
</template>

<script>
    import axios from 'axios'

    export default {
        emits: ['add-neutral'],
        data() {
            return {
            selectedFile: 'null',
            newNeutralId: '',
            enteredNeutralName: '',
            enteredNeutralDescription: '',
            enteredNeutralText: ''
            };
        },
        methods: {
            submitData() {
                this.$emit(
                    'add-hero', 
                    this.selectedFile,
                    this.newNeutralId,
                    this.enteredNeutralName, 
                    this.enteredNeutralDescription,
                    this.enteredNeutralText
                );
            },
            onFileSelected() {
                this.selectedFile = event.target.files[0]
            },
            uploadImage() {
                axios.post('')

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