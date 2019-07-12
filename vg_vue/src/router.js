import Vue from 'vue'
import Router from 'vue-router'
import Landing from './components/Landing'
import Home from './components/Home'
import News from './components/News'
import Error from './components/Error'
import Crossplatform from './components/Events/Crossplatform'
import Signuprules from './components/Events/Signuprules'
import Signupanchor from './components/Events/Signupanchor'
import Academy from './components/Academys/Academy'
import Mode from './components/Academys/Mode'
import Advance from './components/Academys/Advance'
import Equipment from './components/Academys/Equipment'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Landing},
    {path: '/Home',component: Home},
    {path: '/News',component: News},
    {path: '/Events/Crossplatform',component: Crossplatform},
    {path: '/Events/Signuprules',component: Signuprules},
    {path: '/Events/Signupanchor',component: Signupanchor},
    {path: '/Academy',component: Academy},
    {path: '/Academy/Mode',component: Mode},
    {path: '/Academy/Advance',component: Advance},
    {path: '/Academy/Equipment',component: Equipment},
    {path: '*',component: Error},
  ]
})
