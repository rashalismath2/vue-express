import index from '../components/index.vue'
import register from '../components/authentication/register.vue'
import login from '../components/authentication/login.vue'

export default [
    {path:'/',component:index, name:'home'},
    {path:'/register',component:register,name:'register'},
    {path:'/login',component:login,name:'login'}
]