<template>
  <RouterLink
    :to="$localePath"
    class="inline-flex p-3 pt-2 logo bg-main"
  >
    <img
      src="/vue-a11y-logo.svg"
      alt="Vue A11y logo"
    >
    <span class="font-bold sr-only text-22 lg:ml-2 lg:not-sr-only ">Vue A11y</span>
  </RouterLink>
</template>

<script>
export default {
  name: 'Logo'
}
</script>
