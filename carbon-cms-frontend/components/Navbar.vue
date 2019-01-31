<template>
  <nav class="navbar flex justify-between items-center p-12">
    <div>
      <img src="/logo.svg" class="cursor-pointer relative" style="width: 150px; bottom: 5px;">
    </div>
    
    <ul class="list-reset flex flex-row">
      <li class="navbar-menu-item">
        <nuxt-link
          class="navbar-menu-link"
          to="/admin/dashboard">Home</nuxt-link>
      </li>
      <li class="navbar-menu-item">
        <nuxt-link
          class="navbar-menu-link"
          to="/admin/files">Files</nuxt-link>
      </li>
      <li class="navbar-menu-item">
        <nuxt-link
          class="navbar-menu-link"
          to="/admin/users">Users</nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="navbar-menu-link"
          to="/admin/settings">Settings</nuxt-link>
      </li>
    </ul>
    <nuxt-link
      class="navbar-menu-link"
      to="/logout">Logout</nuxt-link>
  </nav>  
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar-menu-item {
  @apply mr-24;
}

.navbar-menu-link {
  font-family: 'PF DinDisplay Pro', sans-serif;
  @apply font-bold uppercase text-xl text-black no-underline tracking-wide;

  &:hover,
  &.nuxt-link-active {
    @apply text-blue;
  }
}
</style>
