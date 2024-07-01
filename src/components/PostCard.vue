<template>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">{{ post.title }}</div>
          <div class="text-caption text-grey">
            {{ post.description }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="post.image"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions class="justify-around">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
    </q-card>
</template>
  
<script setup>

defineProps(['post'])

defineOptions({
  name: 'PostCard',
  inheritAttrs: false
});

</script>

<style>
.my-card {
    width: 100%;
    max-width: 350px;
}
</style>