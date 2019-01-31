<template>
  <div v-if="pageData">
    <slot
      :page="pageData"
      :prevPage="prevPage"
      :nextPage="nextPage"/>
  </div>
</template>

<script>
export default {
  props: {
    initialPageData: {
      type: Object,
      default: null
    },
    fetchPage: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      end: false,
      start: true,
      pageData: this.initialPageData
    }
  },
  async mounted() {
    console.log(this.initialPageData)
  },
  methods: {
    async nextPage() {
      const _nextPage = this.pageData.page + 1
      if (_nextPage > this.pageData.lastPage) {
        this.start = false
        this.end = true
        return
      }

      this.pageData = await this.fetchPage(_nextPage)
    },
    async prevPage() {
      const _prevPage = this.pageData.page - 1
      if (_prevPage < 0) {
        this.end = false
        this.start = true
        return
      }

      this.pageData = await this.fetchPage(_prevPage)
    }
  }
}
</script>
