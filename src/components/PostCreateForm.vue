
<template>
    <div class="q-pa-md" style="max-width: 400px">
        <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
        >

        <q-input
            filled
            v-model="form.title"
            label="Type your Title"
            hint="Type your Title"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Type your Title']"
        />

        <q-input
            filled
            v-model="form.description"
            label="Decription"
            hint="Be short but be brilhant!"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'You can not be brilhant with 0 chars.']"
        />
        
        <q-toggle
            label="Draft"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            v-model="form.draft"
        />

        <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        </q-form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import http from '../services/http.js';

const form = reactive({
    title: '',
    description: '',
    draft: false,
});

function onReset() {
    form.title       = '',
    form.description = '',
    form.draft       = false
}

async function onSubmit(){
  try {
    const {data} = await http.post('api/posts/create', form)
  } catch (error) {
    console.log(error);
  }
}

defineOptions({
  name: 'PostCreateForm'
})
</script>