import { Menu } from 'antd'
import React from 'react'
import { 
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    SettingOutlined
} from '@ant-design/icons'

const MenuList = ({darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
        <Menu.Item key='about' icon={<HomeOutlined />}>
           About
        </Menu.Item>
        <Menu.Item key='resume' icon={<AppstoreOutlined />}>
           Resune 
        </Menu.Item>
        <Menu.Item key='projects' icon={<AreaChartOutlined />}>
           Projects 
        </Menu.Item>
        <Menu.Item key='blog' icon={<PayCircleOutlined />}>
           Blog 
        </Menu.Item>
        <Menu.Item key='contact' icon={<SettingOutlined />}>
           Contact 
        </Menu.Item>
    </Menu>
  )
}

export default MenuList