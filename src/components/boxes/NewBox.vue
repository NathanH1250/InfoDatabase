<template>
    <base-card>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label>Box Number</label>
            <input type="text" v-model="enteredNumber" />
        </div>                    
        <div>
            <button>Add Box</button>
        </div>
    </form>
    </base-card>
</template>

<script>
    export default {
        emits: ['add-box'],
        data() {
            return {
            enteredName: '',
            enteredNumber: ''
            };
        },
        methods: {
            submitData() {
                this.$emit(
                    'add-box', 
                    this.enteredName, 
                    this.enteredNumber
                );
            },
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