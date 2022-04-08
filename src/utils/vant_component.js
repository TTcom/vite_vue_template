import { Button, Tag, Col, Icon, Cell, CellGroup, Toast, Swipe, SwipeItem, ActionBar, ActionBarIcon, ActionBarButton, Tabbar, TabbarItem, Card, SubmitBar, Checkbox } from "vant"
const plugins = [Button, Tag, Col, Icon, Cell, CellGroup, Swipe, SwipeItem, ActionBar, ActionBarIcon, ActionBarButton, Tabbar, TabbarItem, Card, SubmitBar, Checkbox]
window.$toast = Toast
export const setupVant = app => {
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
