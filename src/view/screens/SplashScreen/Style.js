import {
    StyleSheet
} from 'react-native'
import color from '../../../assets/colors/index'
import DeviceUtils from '../../../utils/DeviceUtils'

const{
    dimension 
} = DeviceUtils

const Style = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Background:{
        width: 375*dimension.Window.ratioWidth,
        height:677*dimension.Window.ratioHeight
    },
    ProgressBar:{
        position: "absolute",
        width:dimension.Window.screenWidth,
        bottom: 41.9*dimension.Window.ratioHeight,
        justifyContent:"center",
        alignItems:"center"
    }
});
export default Style;