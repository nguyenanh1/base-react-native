import BaseView from '../../BaseView'

import {
    View,
    Image,
} from 'react-native'
import { connect } from 'react-redux';
import React from 'react'

class LoginScreen extends BaseView{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    componentWillMount(){

    }

    componentWillUpdate(){

    }

    render(){
        const {
            Container
        } = Style
        return (
            <View style={{Container}}>
                <Image source style={{}}/>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        networkStatus: state.NetworkReducer.isConnected

    }
}
const mapDispatchToProps = (dispatch) => ({
    createProfile: (profile) => {
        dispatch(profileAction.createProfile(profile));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
