<template>
  <div class="card" style="width: 400px; margin: auto">
    Welcome {{email}}
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    email: String
  }
}
</script>

<style>

</style>