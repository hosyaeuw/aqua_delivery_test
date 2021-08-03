export interface IChat{
    success: boolean,
    data: IMessage[]
}

export interface IMessage {
    id: number,
    uuid: string,
    group_id: number,
    user_id: number | null,
    chat_group_order_id: number | null,
    type: string,
    message: string,
    readable: number,
    status: number | null,
    created_at: string,
    updated_at: string,
    deleted_at: string | null,
    active: boolean,
    is_system_message: boolean,
    user: number | null,
    is_not_client_message: boolean
}