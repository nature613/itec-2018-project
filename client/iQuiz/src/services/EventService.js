import Api from '@/services/Api'

export default{
    getAllEvents(query){
        return Api().get('events', {params: query})
    },
    getOneEvent(id){
        return Api().get(`event/${id}`)
    },
    postEvent(content){
        return Api().post('events', content)
    },
    updateEvent(id, content){
        return Api().put(`event/${id}`, content)
    },
    deleteEvent(id){
        return Api().delete(`event/${id}`)
    }
}