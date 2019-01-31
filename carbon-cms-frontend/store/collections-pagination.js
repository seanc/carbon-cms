const { createResource } = require('vuex-pagination')

async function fetchControllersPage (opts) {
  const page = await this.$axios.$get(`/collections?page=${opts.page}&pageSize=${opts.pageSize}`)
  return {
    total: page.total,
    items: page.data
  }
}

export default createResource('controllers', fetchControllersPage)