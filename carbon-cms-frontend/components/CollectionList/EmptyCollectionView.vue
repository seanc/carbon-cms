<template>
  <Widget class="flex h-64 items-center justify-center">
    <p class="font-semibold text-2xl text-grey-light">Click on a Collection to view</p>
  </Widget>
</template>

<script>
import Widget from '~/components/Widget'
export default {
  components: { Widget }
}
</script>

<style scoped>
p {
  font-family: 'Arial', sans-serif, 'Helvetica Neue LT Pro', sans-serif;
  font-weight: 600;
  font-style: normal;
}
</style>
