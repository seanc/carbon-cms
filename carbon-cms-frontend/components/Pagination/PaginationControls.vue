<template>
  <div class="flex justify-between px-2">
    <button
      class="control"
      @click="prevPage">
      <v-icon name="arrow-left"/>
    </button>

    <div>
      <!-- page display -->
      <em>{{ page.page }} of {{ page.total }}</em>
    </div>

    <button
      class="control"
      @click="nextPage">
      <v-icon name="arrow-right"/>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default: null
    }
  },
  watch: {
    page(newPage, oldPage) {
      console.log(newPage, oldPage)
    }
  },
  methods: {
    nextPage() {
      this.$emit('next-page')
    },
    prevPage() {
      console.log('pagination controls')
      this.$emit('prev-page')
    }
  }
  // computed: {
  //   pageData() {
  //     const pagination = this.$parent.pagination[this.for]
  //     const pageData = {
  //       lastPage: pagination.lastPage,
  //       currentPage: pagination.page
  //     }

  //     return pageData
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.control {
  @apply text-black;
}
</style>
