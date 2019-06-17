import {
    Dimensions,
    NetInfo
} from 'react-native'
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const ratioWidth = width / 375;
const ratioHeight = height / 666;

const dimension = {
    Window: {
        ratioWidth: ratioWidth,
        ratioHeight: ratioHeight,
        windowWidth: width,
        windownHeight: height,
        screenWidth: screenWidth,
        screenHeight: screenHeight
    }
}

const deviceId = DeviceInfo.getDeviceId();

export default {
    dimension,
    deviceId
}