<template>
  <div class="collection-view">
    <Widget class="h-full">
      <div class="collection-view-header">
        <button class="collection-add-btn"></button>
      </div>
    </Widget>
  </div>
</template>

<script>
import Widget from '~/components/Widget'
export default {
  components: { Widget },
  props: ['name', 'items']
}
</script>

<style>
.collection-view-header {
  @apply flex justify-between;
}

.collection-add-btn {
  @apply bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded;
}
</style>
