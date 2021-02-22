import HomePage from '../pages/home'
import Mine from '../pages/mine'

const routes = [
  {
    path:'/',
    exact: true,
    component:HomePage,
  },
  {
    path:'/mine',
    component:Mine,
  }
]

export default routes