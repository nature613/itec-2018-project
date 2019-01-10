import Api from '@/services/Api'

export default {
    getAllQuestions(query){
        return Api().get('questions', {params: query})
    },
    getOneQuestion(id){
        return Api().get(`question/${id}`)
    },
    postQuestion(content){
        return Api().post('questions', content)
    },
    updateQuestion(id, content){
        return Api().put(`question/${id}`, content)
    },
    deleteQuestion(id){
        return Api().delete(`question/${id}`)
    }
}