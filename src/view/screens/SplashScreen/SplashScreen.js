import BaseView from '../../BaseView'
import Style from './Style'
import {
    View,
    Image,
    StatusBar,
    ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux';
import React from 'react'
import AsyncStorageUtils from '../../../utils/AsyncStorageUtils'
import color from '../../../assets/colors/index'
import {
    IMAGE_SPLASH_SCREEN
} from '../../../assets/images/index.image'

const TIME_PASS = 2000;
class SplashScreen extends BaseView {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        asyncStorage = new AsyncStorageUtils();
        // console.log(asyncStorage.getIsLogin()+" <==");
        // if (asyncStorage.getIsLogin() == false) {
        //     this.showToastLengthShort("Chưa login");
        // }
        setTimeout(() => {
            asyncStorage.getIsLogin().then(val => {
                if (val === "true") {
                    this.showToastLengthShort("Logined");
                } else {
                    this.showToastLengthShort("Is Not Logined");
                }
            });
        }, TIME_PASS);
    }

    componentWillMount() {

    }

    componentWillUpdate() {

    }

    render() {
        const {
            Container,
            Background,
            ProgressBar,
        } = Style
        return (
            <View style={Container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image source={IMAGE_SPLASH_SCREEN} style={Background} />
                <View style={ProgressBar}>
                    <ActivityIndicator color={color.colorWrite} size="large" />
                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        networkStatus: state.NetworkReducer.isConnected
    }
}

export default connect(mapStateToProps)(SplashScreen);
