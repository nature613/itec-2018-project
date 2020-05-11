<template>
    <transition name="slide" mode="out-in">
        <component :is="adminMode" @admin-mode="table = !table"/>
    </transition>
</template>

<script>
import ShowAllUsers from './ShowAllUsers'
import AddNewAdmin from './AddNewAdmin'

export default {
  data () {
    return {
      table: true,
    }
  },
  components:{
      showAllUsers : ShowAllUsers,
      addNewAdmin : AddNewAdmin
  },
  computed: {
    adminMode(){
        return this.table?"showAllUsers":"addNewAdmin"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.slide-enter-active, .slide-leave-active
        transition: all .5s ease-in-out

.slide-enter
    transform: translateX(-20vw);
    opacity: 0;

.slide-leave-to
    transform: translateX(20vw);
    opacity: 0;
</style>