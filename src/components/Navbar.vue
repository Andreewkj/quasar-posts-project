<template>
    <div class="flex bg-black rounded-borders">
      <q-btn class="bg-primary"><router-link style="text-decoration: none; color: white" to="/">Home</router-link></q-btn>
        <q-btn-dropdown class="bg-primary text-white" label="Post" dropdown-icon="book">
      <q-list>
        <q-item clickable v-close-popup class="bg-primary">
          <q-item-section><router-link style="text-decoration: none; color: white;" to="/posts">List</router-link>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup class="bg-primary">
          <q-item-section><router-link style="text-decoration: none; color: white;" to="/posts/create">Posts</router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    </div>
</template>

<script setup>
defineOptions({
  name: 'NavBar'
})
</script>