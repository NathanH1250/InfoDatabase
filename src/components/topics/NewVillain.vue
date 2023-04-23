<template>
    <base-card>
    <form @submit.prevent="submitData">
        <div class="imageUploader">
            <input type="file" @change="onFileSelected">
            <button @click="uploadImage">Upload</button>
        </div>
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredVillainName" />
        </div>
        <div>
            <label>ID</label>
            <input type="text" v-model="newVillainId" />
        </div>
        <div>
            <label>Villain Description</label>
            <input type="text" v-model="enteredVillainDescription" />
        </div>     
        <div>
            <label>Villain Text</label>
            <input type="text" v-model="enteredVillainText" />
        </div>                    
        <div>
            <button>Add Villain</button>
        </div>
    </form>
    </base-card>
</template>

<script>
    import axios from 'axios'

    export default {
        emits: ['add-villain'],
        data() {
            return {
            selectedFile: 'null',
            newVillainId: '',
            enteredVillainName: '',
            enteredVillainDescription: '',
            enteredVillainText: ''
            };
        },
        methods: {
            submitData() {
                this.$emit(
                    'add-villain', 
                    this.selectedFile,
                    this.newVillainId,
                    this.enteredVillainName, 
                    this.enteredVillainDescription,
                    this.enteredVillainText
                );
            },
                onFileSelected(event) {
            this.selectedFile = event.target.files[0]
            },
                uploadImage() {
                    const fd = new FormData();
                    fd.append('image', this.selectedFile, this.selectedFile.name)
                    axios.post('')
                        .then(res => {
                            console.log(res)
                        })
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