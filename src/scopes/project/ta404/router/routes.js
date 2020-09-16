import routesContainer from '@/common/components/routesContainer'

// 模块part 声明导入
import ta404jc from '../modulePart/ta404jc/routes'

const innerRoutes = [
  ...ta404jc
]
// 导入路由声明
export default [
  {
    path: '/',
    component: routesContainer,
    children: innerRoutes.map((item) => ({
      ...item,
    })
    ),
  }
]
