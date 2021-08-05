import React from 'react'

import cn from 'classnames'

import './style.scss'

interface IButtonProps {
    onClick?: () => void,
    disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({ children, onClick = () => { }, disabled = false }) => {
    return (
        <button className={cn("btn", {btn_disabled: disabled})} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
