import { useState } from 'react'
import {Button, Layout, theme} from 'antd'
import './App.css'
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
const {Header, Sider} = Layout;
import About from './components/About/About'

function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  };

  const{ 
    token: {colorBgContainer}
} = theme.useToken();
  return (
    <div className='split'>
      <Layout className='res'>
      <Sider collapsed={collapsed}
      collapsible
      trigger={null}
       theme={darkTheme ? 'dark' : 'light'} className='sidebar'>
        <Layout>
        <Header className='head' style={{padding: 0, background:colorBgContainer}}>
          <Button 
          onClick={() => setCollapsed(!collapsed)}
          className='toggler' type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}/>
          <Logo />
        </Header>
      </Layout>
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme} 
        toggleTheme={toggleTheme}/>
      </Sider>
      
    </Layout>
    <About />
    </div>
  )
}

export default App
