<template>
  <div class="h-64 max-height-full">
    <Collection
      v-for="collection in collections.items"
      :key="collection.id"
      :name="collection.name"
      :item-count="collection.meta.item_count"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Collection from '~/components/CollectionList/Collection.vue'
import Pagination from '~/components/Pagination/Pagination.vue'
import PaginationControls from '~/components/Pagination/PaginationControls.vue'
import { createInstance } from 'vuex-pagination'

export default {
  components: {
    Collection
  },
  computed: {
    collections: createInstance('collections', {
      pageFrom: 1,
      pageSize: 5
    })
  }
}
</script>
