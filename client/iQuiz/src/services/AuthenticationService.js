import Api from '@/services/Api'

export default {
    register(credentials){
        return Api().post('register', credentials, {'timeout': 10000})
    },
    login(credentials){
        return Api().post('authenticate', credentials, {'timeout': 10000})
    }
}