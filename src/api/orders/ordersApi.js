import apiClient from "../apiClient.js"

export const getAllOrders = async () => {
    return apiClient.get('orders/')
}

export const getRetrieveOrder = async (orderId) => {
    return apiClient.get(`orders/${orderId}/`)
}

export const createOrder = async (data) => {
    return apiClient.post('orders/', {...data})
}

export const confirmOrderPayment = async (orderId) => {
    return apiClient.post(`orders/${orderId}/confirm_payment/`)
}