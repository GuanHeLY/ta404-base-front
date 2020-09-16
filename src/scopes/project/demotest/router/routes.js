import routesContainer from '@/common/components/routesContainer'

// 模块part 声明导入
import modulePart from '../modulePart/modulePart1/routes'

const innerRoutes = [
  ...modulePart
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
