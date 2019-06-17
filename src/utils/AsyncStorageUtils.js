import AsyncStorage from '@react-native-community/async-storage';
import DefAsysncStrorage from '../common/DefAsysncStrorage'
import { nullLiteral } from '@babel/types';

export default class AsyncStorageUtils {

    getIsLogin = async () => {
        try{
            const value  = await AsyncStorage.getItem(DefAsysncStrorage.IS_LOGIN,"");
            return value;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    setIsLogin = async (isLogin) => {
        try{
            await AsyncStorage.setItem(DefAsysncStrorage.IS_LOGIN,isLogin);
        }catch(e){
            console.log(e);
        }
    }

    getUsername = async () =>{
        try{
            const value = await AsyncStorage.getItem(DefAsysncStrorage.USER_NAME);
            return value;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    setUserName = async (username) =>{
        try{
            await AsyncStorage.setItem(DefAsysncStrorage.USER_NAME,username);
        }catch(e){
            console.log(e);
        }
    }

    getPhone = async () =>{
        try{
            const value = await AsyncStorage.getItem(DefAsysncStrorage.PHONE);
            return value;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    setPhone = async (phone) =>{
        try {
            await AsyncStorage.setItem(DefAsysncStrorage.PHONE,phone);
        } catch (e) {
            console.log(e);
        }
    }

    getEmail = async () =>{
        try{
            const value = await AsyncStorage.getItem(DefAsysncStrorage.EMAIL);
            return value;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    setEmail = async (email) =>{
        try {
            await AsyncStorage.setItem(DefAsysncStrorage.EMAIL,email);
        } catch (e) {
            console.log(e);
        }
    }

    getToken = async () =>{
        try{
            const value = await AsyncStorage.getItem(DefAsysncStrorage.TOKEN);
            return value;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    setToken = async (token) =>{
        try {
            await AsyncStorage.setItem(DefAsysncStrorage.TOKEN,token);
        } catch (e) {
            console.log(e);
        }
    }

    getAvatar = async () =>{
        try{
            const value = await AsyncStorage.getItem(DefAsysncStrorage.AVATAR);
            return value;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    setAvatar = async (avatar) =>{
        try {
            await AsyncStorage.setItem(DefAsysncStrorage.AVATAR,avatar);
        } catch (e) {
            console.log(e);
        }
    }

    getUserType = async () =>{
        try{
            const value = await AsyncStorage.getItem(DefAsysncStrorage.USER_TYPE);
            return value;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    setUserType = async (userType) =>{
        try {
            await AsyncStorage.setItem(DefAsysncStrorage.USER_TYPE,userType);
        } catch (e) {
            console.log(e);
        }
    }  
}