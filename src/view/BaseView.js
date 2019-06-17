import React from 'react';
import {
    ToastAndroid,
} from 'react-native'

export default class BaseView extends React.Component {
    constructor(props){
        super(props);
    }
    showToastLengthShort(mess) {
        ToastAndroid.show(mess, ToastAndroid.SHORT);
    }
    showToastLengthLong(mess) {
        ToastAndroid.show(mess, ToastAndroid.LONG);
    }

    goToHome() {

    }

    goToLogin() {

    }

    showNetWorkOnDisconnect(){
        this.showToastLengthShort("Không có kết nối mạng");
    }

    goToLoginWithMessage(mess) {
        this.showToastLengthShort(mess);
        this.goToLogin();
    }

    showProgress() {

    }

    hideProgress() {

    }
}