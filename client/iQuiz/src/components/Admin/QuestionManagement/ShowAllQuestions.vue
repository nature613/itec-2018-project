<template>
  <div class="base-plate dashboard-plate">
    <h1 class="heading">Questions</h1>
    <span class="buton" @click="$emit('admin-mode');">Add new question</span>
    <div class="push"></div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :fixed-header="false"
      :search-options="{
        enabled: true,
        skipDiacritics: true,
        placeholder: 'Search questions',
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
          <img src="../../../assets/delete-24px.svg" style="cursor: pointer" @click="deleteQuestion(props.row._id)"/>
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
      </vue-good-table>
  </div>
</template>

<script>
import QuestionService from '@/services/QuestionService'
import UserService from '@/services/UserService'

export default {

  data () {
    return{
      columns: [
        {
          label: 'Id',
          field: "_id" ,
          hidden: true
        },
        {
          label: 'Title',
          field: 'title'
        },
        {
          label: 'Scored',
          field: 'scored',
          type: 'boolean'
        },
        {
            label: 'Type',
            field: 'questionType',
            type: 'number',
            formatFn: this.getType
        },
        {
            label: 'Category',
            field: 'category'
        },
        {
            label: "Difficulty",
            field: 'difficulty',
            type: 'number',
            formatFn: this.getDiff
        },
        {
            label: 'Answers',
            field: 'answers',
            sortable: false,
            formatFn: this.getAns
        },
        {
            label: "Correct answers",
            field: 'correctAnswers',
            sortable: false,
            formatFn: this.getAns
        },
        {
          label: 'Actions',
          field: 'actions',
          sortable: false,
        },

      ],
      rows: [],
    }
  },
  methods: {
    getType(type){
        if(type==0) return "Text"
        else if (type==1) return "Radio"
        else return "Checkbox"
    },
    getDiff(diff){
        if(diff===0) return "Easy"
        else if (diff===1) return "Medium"
        else return "Hard"
    },   
    getAns(ans){
        if(ans == false) return "None"
        else return ans.toString()
    },
    async deleteQuestion(id){
        console.log(id)
      if (confirm(`Delete this question?`)) {
        try{
          const response = await QuestionService.deleteQuestion(id)
          this.$router.go();
        }
        catch(error){
          console.log(error)
        }
      }
    }
  },
  async mounted() {
    const questions = (await QuestionService.getAllQuestions()).data;
    this.rows = questions
  },
  computed: {

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
