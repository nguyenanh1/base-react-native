const changeNetworkStatus = (isConnected) => {
    
    return {
        type: 'NETWORK_STATUS',
        payload: {
            isConnected: isConnected
        }
    }

}

export default {
    changeNetworkStatus
}