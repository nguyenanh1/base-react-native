const initialState = {
    isConnected: false
}
export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'NETWORK_STATUS':
           
            return {
                ...state,
                isConnected: payload.isConnected
            }

        default:
            return state
    }
}