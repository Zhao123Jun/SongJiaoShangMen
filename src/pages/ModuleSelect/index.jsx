import React from 'react'
import './style.css'
import avatarImg from '../../assets/image/touxiang.jpg'
import { useNavigate } from 'react-router-dom'

export default function ModuleSelect() {
  const navigate = useNavigate()

  const handleEnter = (moduleName) => {
    if (moduleName === '基础信息') {
      navigate('/basic-info')
    }
    // 可继续扩展其他模块：
    else if (moduleName === '服务中心') {
      navigate('/service-center')
    } else if (moduleName === '执行记录') {
      navigate('/execution-record')
    }
  }

  return (
    <div className="module-page">
      <header className="top-bar">
        <div className="module_header-title">失能儿童个性化智能学习系统</div>
        <div className="user-info">
          <img src={avatarImg} alt="用户头像" className="avatar" />
          <span className="username">张三</span>
          <select className="dropdown">
            <option>个人中心</option>
            <option>退出登录</option>
          </select>
        </div>
      </header>

      <main className="module-container">
        <div className="module-card">
          <h3>基础信息</h3>
          <button onClick={() => handleEnter('基础信息')}>进入系统</button>
        </div>
        <div className="module-card">
          <h3>服务中心</h3>
          <button onClick={() => handleEnter('服务中心')}>进入系统</button>
        </div>
        <div className="module-card">
          <h3>执行记录</h3>
          <button onClick={() => handleEnter('执行记录')}>进入系统</button>
        </div>
      </main>
    </div>
  )
}
