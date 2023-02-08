import apiClient from "../apiClient.js"

export const getAllItems = async () => {
    return apiClient.get('items/'   )
}

export const getRetrieveItem = async (itemId) => {
    return apiClient.get(`items/${itemId}/`)
}
