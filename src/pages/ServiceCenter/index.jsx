import React, { useState } from 'react';
import './style.css';
import avatarImg from '../../assets/image/touxiang.jpg';

export default function ServiceCenter() {
  const [activeTab, setActiveTab] = useState('category'); // 当前页签状态

  // 多样化模拟数据
  const categoryNames = [
    '文化授课', '心理疏导', '温情陪伴', '文体活动', '生活照料',
    '语言康复', '认知训练', '感统训练', '社交体验', '亲子互动',
    '情绪管理', '技能提升', '游戏疗育'
  ];

  const scheduleData = [
    { name: '李四', type: '重度失能', id: '123456199201010001' },
    { name: '王五', type: '轻度失能', id: '123456199201010002' },
    { name: '赵六', type: '重度失能', id: '123456199201010003' },
    { name: '钱七', type: '重度失能', id: '123456199201010004' },
    { name: '孙八', type: '中度失能', id: '123456199201010005' },
    { name: '周九', type: '重度失能', id: '123456199201010006' },
    { name: '吴十', type: '轻度失能', id: '123456199201010007' },
    { name: '郑十一', type: '中度失能', id: '123456199201010008' },
    { name: '冯十二', type: '中度失能', id: '123456199201010009' },
    { name: '陈十三', type: '轻度失能', id: '123456199201010010' },
    { name: '褚十四', type: '轻度失能', id: '123456199201010011' },
  ];

  return (
    <div className="basic-page">
      {/* 顶部标题栏 */}
      <div className="top-bar">
        <div className="module_header-title">失能儿童个性化智能学习系统</div>
        <div className="user-info">
          <img src={avatarImg} alt="用户头像" className="avatar" />
          <span className="username">张三</span>
          <select className="user-select">
            <option>个人中心</option>
            <option>退出登录</option>
          </select>
        </div>
      </div>

      <div className="content-container">
        {/* 左侧功能栏 */}
        <div className="sidebar">
          <div className="sidebar-title">服务中心</div>
          <hr />
          <button
            className={`sidebar-btn ${activeTab === 'category' ? 'active' : ''}`}
            onClick={() => setActiveTab('category')}
          >
            服务项目分类
          </button>
          <button
            className={`sidebar-btn ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            服务排班管理
          </button>
        </div>

        {/* 主区域 */}
        <div className="main-content">
          {/* 搜索栏 */}
          <div className="search-bar">
            {activeTab === 'category' ? (
              <div className="row">
                <div className="form-item">
                  <span className="label">项目分类名称：</span>
                  <input placeholder="请输入项目分类名称" />
                </div>
                <div className="buttons">
                  <button className="reset-btn">重置</button>
                  <button className="search-btn blue">查询</button>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="form-item">
                  <span className="label">姓名：</span>
                  <input placeholder="请输入姓名" />
                </div>
                <div className="form-item">
                  <span className="label">身份证号：</span>
                  <input placeholder="请输入身份证号" />
                </div>
                <div className="form-item">
                  <span className="label">人员类型：</span>
                  <input placeholder="请输入人员类型" />
                </div>
                <div className="buttons">
                  <button className="reset-btn">重置</button>
                  <button className="search-btn blue">查询</button>
                </div>
              </div>
            )}
          </div>

          {/* 表格标题 */}
          <div className="table-title">
            {activeTab === 'category' ? '服务项目分类表' : '服务排班管理表'}
          </div>

          {/* 表格区域 */}
          <table className="data-table">
            <thead>
              {activeTab === 'category' ? (
                <tr>
                  <th>序号</th>
                  <th>服务项目编号</th>
                  <th>项目分类名称</th>
                  <th>开始时间</th>
                  <th>结束时间</th>
                </tr>
              ) : (
                <tr>
                  <th>序号</th>
                  <th>儿童姓名</th>
                  <th>人员类型</th>
                  <th>身份证号</th>
                  <th>最早排班时间</th>
                  <th>最晚排班时间</th>
                  <th>操作</th>
                </tr>
              )}
            </thead>
            <tbody>
              {activeTab === 'category'
                ? categoryNames.map((name, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>F2025{String(idx).padStart(2, '0')}</td>
                      <td>{name}</td>
                      <td>2025-01-01</td>
                      <td>2025-12-31</td>
                    </tr>
                  ))
                : scheduleData.map((item, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.id}</td>
                      <td>2025-07-01</td>
                      <td>2025-07-31</td>
                      <td><button className="action-btn">查看</button></td>
                    </tr>
                  ))}
            </tbody>
          </table>

          {/* 翻页 */}
          <div className="pagination">
            <button>上一页</button>
            <button>下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
