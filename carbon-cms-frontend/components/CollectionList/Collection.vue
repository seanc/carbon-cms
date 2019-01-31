<template>
  <Widget class="group cursor-pointer hover:bg-black mb-8">
    <div class="flex py-1">
      <div class="w-1/2">
        <p class="text-2xl font-semibold group-hover:text-white">{{ name }}</p>
        <p class="text-grey text-xl mt-1">{{ itemCount }} Items</p>
      </div>
      <div class="w-1/4 w-full flex items-start justify-end">
        <nuxt-link
          to="/admin/collections/products/edit/1"
          class="no-underline font-semibold text-sm text-black group-hover:text-white">EDIT</nuxt-link>
      </div>
    </div>
  </Widget>
</template>

<script>
import Widget from '~/components/Widget'

export default {
  components: { Widget },
  props: {
    name: {
      type: String,
      default: 'Unnamed'
    },
    itemCount: {
      type: Number,
      default: 0
    }
  }
}
</script>
