<template>
  <div class="row justify-end" @click="goCreate">
    <q-btn square color="primary" icon="assignment" />
  </div>
  <div style="width: 70%" class="row justify-evenly q-mx-auto">
    <PostCard v-for="(post, index) in posts.posts" :key="index" :post="post" />
  </div>
</template>

<script setup>

import PostCard from '../components/PostCard.vue';
import { useRouter } from 'vue-router';
import { onMounted, reactive } from 'vue';
import http from '../services/http.js'

const router = useRouter();

let posts = reactive({posts:[]});

function goCreate(){
  router.push({
    path: '/posts/create'
  })
}

const test = 'teste';

onMounted(async () => {
  try {
    const {data} = await http.get('api/posts')
    posts.posts = data;
    console.log(posts.posts);
  } catch (error) {
    console.log(error);
  }
})

defineOptions({
  name: 'PostsPage'
});
</script>