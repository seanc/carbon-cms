<template>
  <div>
    <div class="container mx-auto px-2 py-12">
      <div class="flex">
        <div class="w-1/2">
          <CollectionList/>
        </div>
        <div class="w-full ml-12">
          <EmptyCollectionView v-if="!selectedCollection"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionList from '~/components/CollectionList/CollectionList.vue'
import EmptyCollectionView from '~/components/CollectionList/EmptyCollectionView.vue'

export default {
  components: { CollectionList, EmptyCollectionView },
  data: () => {
    return {
      collections: [],
      selectedCollection: ''
    }
  }
}
</script>
