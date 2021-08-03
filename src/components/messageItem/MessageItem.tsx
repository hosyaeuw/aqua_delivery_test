import React from 'react'

import { IMessage } from '../../interfaces/messages'

import './style.scss'

interface IMessageItemProps {
    message: IMessage,
    deleteHandler?: () => void,
    photo: string
}

const MessageItem: React.FC<IMessageItemProps> = ({ message, deleteHandler = () => { }, photo = 'default' }) => {
    const [showMenu, setShowMenu] = React.useState<boolean>(false)
    const menuRef = React.useRef(null)

    const toggleShowMenu = (): void => {
        if (!showMenu) {
            document.body.addEventListener('click', handleOutsideClick);
        }
        setShowMenu(prev => !prev)
    }

    const handleOutsideClick = (e: any) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(menuRef.current)) {
            setShowMenu(false);
            document.body.removeEventListener('click', handleOutsideClick)
        }
    };

    return (
        <div className="message-wrapper">
            <div className="message">
                <img src={photo} alt="user_photo" className="message__photo" />
                <div className="message__content">
                    <div>
                        <span className="message__text">
                            {message.message}
                            <div className="message__use-wrapper">
                                <button className="message__use" onClick={toggleShowMenu}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3 12C3 10.896 3.896 10 5 10C6.104 10 7 10.896 7 12C7 13.104 6.104 14 5 14C3.896 14 3 13.104 3 12ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM19 10C17.896 10 17 10.896 17 12C17 13.104 17.896 14 19 14C20.104 14 21 13.104 21 12C21 10.896 20.104 10 19 10Z"
                                            fill="#B7BDCB"
                                        />
                                    </svg>
                                </button>
                                {showMenu &&
                                    <div className="message__use__menu" ref={menuRef}>
                                        <div className="message__use__menu__item" onClick={deleteHandler}>Удалить</div>
                                    </div>
                                }
                            </div>
                        </span>
                        <span className="message__date">{message.created_at}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageItem
