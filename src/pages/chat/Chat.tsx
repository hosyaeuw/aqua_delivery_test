import React from 'react'
import { map, filter, range, divide } from 'lodash'

import { MessageItem, MessageItemLoader } from '../../components'

import { fetchMessages } from '../../services/requests'

import { IMessage } from '../../interfaces/messages'

import logo from '../../static/imgs/logo.png'

import './style.scss'

const Chat: React.FC = () => {
    const [messages, setMessages] = React.useState<IMessage[]>([])
    const [messagesLoaded, setMessagesLoaded] = React.useState<boolean>(false)

    const deleteHandler = (id: number): void => {
        setMessages(prev => filter(prev, item => id !== item.id))
    }

    React.useEffect(() => {
        fetchMessages().then(({ data }) => {
            setMessages(data.data)
            setMessagesLoaded(true)
        })
    }, [])
    return (
        <div className="chat">
            {!messagesLoaded ?
                map(range(8), () => <MessageItemLoader />) :
                map(messages, message => (
                    <MessageItem deleteHandler={() => deleteHandler(message.id)} key={message.id} photo={logo} message={message} />
                ))
            }

        </div>
    )
}

export default Chat
