import instance from './BaseAxios'


//Login
const login = instance({
    method:"POST",
    url:"/users/login"
});
//SignUp
const signUp = instance({
    method:"POST",
    url:"/users/sign-up",
})

export default {
    login,
    signUp
}