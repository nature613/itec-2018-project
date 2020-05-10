import Api from '@/services/Api'

export default {
    getAllUsers(query){
        return Api().get('users', {params: query})
    },
    createAdmin(content){
        return Api().post('users', content)
    }
}