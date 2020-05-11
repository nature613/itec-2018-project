<template>
  <div class="base-plate dashboard-plate">
    <h1 class="heading">App users</h1>
    <span class="buton" @click="$emit('admin-mode');">Add new admin</span>
    <div class="push"></div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :fixed-header="true"
      :search-options="{
        enabled: true,
        skipDiacritics: true,
        placeholder: 'Search users',
      }"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: 10,
        perPageDropdown: [5, 10, 20],
        nextLabel: 'next',
        prevLabel: 'prev',
        rowsPerPageLabel: 'Rows per page',
        ofLabel: 'of',
        allLabel: 'All',
      }"
      >
      <template slot="table-row" slot-scope="props">
        <span v-if="(props.column.field == 'actions')">
          <img src="../../../assets/delete-24px.svg" style="cursor: pointer" @click="deleteUser(props.row.email)"/>
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
      </vue-good-table>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {

  data () {
    return{
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Email',
          field: 'email'
        },
        {
          label: 'Admin',
          field: 'admin',
        },
        {
          label: 'Actions',
          field: 'actions',
          sortable: false,
          width: '80px',
        }
      ],
      rows: [],
    }
  },
  methods: {
    selectionChanged(){
      console.log("lol")
    },
    async deleteUser(email){
      if (confirm(`Delete this user?`)) {
        try{
          const response = await UserService.deleteUser(email)
          this.$router.go();
        }
        catch(error){
          console.log(error)
        }
      }
    }
  },
  async mounted() {
    const users = (await UserService.getAllUsers()).data;
    this.rows = users
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.heading
    font-weight: bold
    font-size: 48px
    margin-top: 10%
    color: #fff
    margin-bottom: 6vh
    margin-top: 0

.dashboard-plate
  padding: 4vh 2vw
  min-height: 75vh
  margin-bottom: 4vh

.buton
  font-size: 27px
  font-weight: 700
  background-color: #fff
  width: 30%
  text-align: center
  padding: 2% 7.5%
  box-sizing: border-box
  border-radius: 10px
  cursor: pointer
  color: #5f0683

  &:hover
    box-shadow: 0 0 15px #000

</style>
