/**
* @Author aiden
* @Date 2021-02-24 20:50:23
* @Last Modified by: aidenn
* @Last Modified time: 2022-02-26 08:03:133
*/
import { authSelector } from '@/store/slices/auth.slice';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, HashRouter, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import routers from './routers'
interface Props {}
export const IRouter = process.env.REACT_APP_I_ENV === 'local' ? HashRouter : BrowserRouter
const RouterChildren: React.FC = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const authState = useSelector(authSelector)
  const token = authState.access_token


  console.log(props, 'ehfwefewn---')
  // useEffect(() => {
  //   if (!isLogin && location.pathname !== '/auth') {
  //     navigate('/auth', {
  //       replace: true,
  //       state: {
  //         title: location?.state?.title || '',
  //       }
  //     })
  //   }
  // }, [])

  return useRoutes(routers as any)
}
const Router: React.FC<Props> = (props) => {

  return (
    <IRouter >
      <RouterChildren />
    </IRouter>
  )
}

export default Router
