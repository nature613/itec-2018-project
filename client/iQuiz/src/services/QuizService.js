import Api from '@/services/Api'

export default{
    useQR(QR){
        return Api().put('/useQR', QR)
    }
}