<template>
    <div class="hello">
        <h2>Add Event</h2>
    </div>
</template>

<script>
export default {
  name: 'AddEvent',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$store.state.token)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
