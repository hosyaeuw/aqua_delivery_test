export const getToken = () => {
    let token = localStorage.getItem('token')
    if (!token) token = sessionStorage.getItem('token')
    return token
}