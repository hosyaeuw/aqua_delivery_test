import React from 'react'
import { mount } from 'enzyme'

import MessageItem from './MessageItem'

const message = {
    id: 383253,
    uuid: "9e62907d-e435-43cb-9a00-32abca28c080",
    group_id: 12,
    user_id: null,
    chat_group_order_id: null,
    type: "notification",
    message: "asdasdas",
    readable: 0,
    status: null,
    created_at: "2021-04-15 16:58:48",
    updated_at: "2021-04-15 16:58:48",
    deleted_at: null,
    active: true,
    is_system_message: true,
    user: null,
    is_not_client_message: true
}

describe('Testing <MessageItem>', () => {
    const component = mount(<MessageItem message={message} deleteHandler={() => { }} photo='123.png' />)

    it('Click on button show menu', () => {
        component.find('.message__use').simulate('click')
        component.find('.message__use__menu')
        // console.log(component.state())
        // expect(component.prop('showMenu')).toBeTruthy();
    })
})
