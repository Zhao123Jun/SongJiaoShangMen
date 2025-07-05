import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // 简单示例的账号密码表
  const validAccounts = {
    admin: '123456',
    user1: 'password1',
    user2: 'password2',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) {
      alert('请输入账号和密码')
      return
    }
    // 验证账号密码是否匹配
    if (validAccounts[username] && validAccounts[username] === password) {
      // 登录成功跳转
      navigate('/module-select')
    } else {
      alert('账号或密码错误，请重新输入')
    }
  }

  return (
    <div className="page-container">
      <div className="header-title">失能儿童个性化智能学习系统</div>
      <div className="login-wrapper">
        <div className="login-image" />
        <div className="login-container">
          <h2>用户登录</h2>
          <form onSubmit={handleSubmit} className="login-form">

            <div className="input-group">
              <span className="input-icon">👤</span>
              <input
                type="text"
                placeholder="请输入账号"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                placeholder="请输入密码"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">登录</button>

            <div className="login-options">
              <label>
                <input type="checkbox" />
                记住账号
              </label>
              <span className="forgot-password">忘记密码？</span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
