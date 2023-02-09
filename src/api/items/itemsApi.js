import apiClient from "../apiClient.js"

export const getAllItems = async () => {
    return apiClient.get('items/'   )
}

export const getRetrieveItem = async (itemId) => {
    return apiClient.get(`items/${itemId}/`)
}

export const getItemAvailableSize = async (itemId, size) => {
    return apiClient.get(`items/${itemId}/get_available_sizes`, {
        params: {
            'size': size
        }
    })
}