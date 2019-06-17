import BaseView from './view/BaseView'
import AppContainer from './view/navigations/AppContainer'
import NavigationServices from './view/navigations/NavigationService'
import { Provider } from 'react-redux'
import store from './store/store'
import { NetInfo } from '@react-native-community/netinfo'
import React from 'react'
import NetworkActions from './actions/NetworkAction'

export default class App extends BaseView {
    

    handleFirstConnectivityChange(isConnected) {
        store.dispatch(NetworkActions.changeNetworkStatus(isConnected));
        if (!isConnected) {
            this.showNetWorkOnDisconnect();
        }
    }

    async componentDidMount() {
        NetInfo.addEventListener(state => {
            console.log("Network: "+state.isConnected);
            this.handleFirstConnectivityChange(state.isConnected);
        });
    }

    componentWillUnmount() {
       
    }

    render() {
        return (
            <Provider store={store}>
                <AppContainer ref={navigatorRef => {
                    NavigationServices.setTopLevelNavigator(navigatorRef);
                }}>
                </AppContainer>
            </Provider>
        );
    }
}
