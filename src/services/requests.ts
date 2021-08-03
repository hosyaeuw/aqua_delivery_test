import axios from 'axios'
import { IChat } from '../interfaces/messages'
import { IAuth } from '../interfaces/user'

export const auth = (fields: IAuth) => {
    return axios.post('/v1/auth/login/', fields)
}

export const fetchMessages = () => {
    return axios.get<IChat>('/v1/chat/get-messages?id=12233')
}