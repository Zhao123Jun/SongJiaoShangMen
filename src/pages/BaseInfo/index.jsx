import React from 'react';
import './style.css';
import avatarImg from '../../assets/image/touxiang.jpg';

export default function BasicInfo() {
  // 示例人员数据（10条）
  const staffData = [
    { id: 'P2025001', name: '李雷', gender: '男', phone: '13811110001', type: '志愿者', idCard: '123456199001011234', edu: '本科' },
    { id: 'P2025002', name: '韩梅梅', gender: '女', phone: '13811110002', type: '工作人员', idCard: '123456199002022345', edu: '硕士' },
    { id: 'P2025003', name: '王刚', gender: '男', phone: '13811110003', type: '志愿者', idCard: '123456199003033456', edu: '大专' },
    { id: 'P2025004', name: '刘婷', gender: '女', phone: '13811110004', type: '工作人员', idCard: '123456199004044567', edu: '本科' },
    { id: 'P2025005', name: '赵云', gender: '男', phone: '13811110005', type: '志愿者', idCard: '123456199005055678', edu: '中专' },
    { id: 'P2025006', name: '孙丽', gender: '女', phone: '13811110006', type: '工作人员', idCard: '123456199006066789', edu: '博士' },
    { id: 'P2025007', name: '周杰', gender: '男', phone: '13811110007', type: '志愿者', idCard: '123456199007077890', edu: '本科' },
    { id: 'P2025008', name: '郑爽', gender: '女', phone: '13811110008', type: '工作人员', idCard: '123456199008088901', edu: '硕士' },
    { id: 'P2025009', name: '冯明', gender: '男', phone: '13811110009', type: '志愿者', idCard: '123456199009099012', edu: '大专' },
    { id: 'P2025010', name: '陈雪', gender: '女', phone: '13811110010', type: '工作人员', idCard: '123456199010101123', edu: '本科' },
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
          <div className="sidebar-title">基础信息</div>
          <hr />
          <button className="sidebar-btn active">服务人员管理</button>
        </div>

        {/* 右侧主区域 */}
        <div className="main-content">
          {/* 搜索栏 */}
          <div className="search-bar">
            <div className="row">
              <div className="form-item">
                <span className="label">姓名：</span>
                <input placeholder="请输入姓名" />
              </div>
              <div className="form-item">
                <span className="label">人员编号：</span>
                <input placeholder="请输入人员编号" />
              </div>
              <div className="form-item">
                <span className="label">人员类型：</span>
                <select className="search-select">
                  <option value="">请选择人员类型</option>
                  <option value="志愿者">志愿者</option>
                  <option value="工作人员">工作人员</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-item">
                <span className="label">性别：</span>
                <select className="search-select">
                  <option value="">请选择性别</option>
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </div>
              <div className="form-item">
                <span className="label">联系电话：</span>
                <input placeholder="请输入联系电话" />
              </div>
              <div className="buttons">
                <select className="dropdown-select">
                  <option>展开</option>
                </select>
                <button className="reset-btn">重置</button>
                <button className="search-btn">查询</button>
              </div>
            </div>
          </div>

          {/* 表格标题 */}
          <div className="table-title">服务人员管理表</div>

          {/* 表格区域 */}
          <table className="data-table">
            <thead>
              <tr>
                <th>序号</th>
                <th>人员编号</th>
                <th>姓名</th>
                <th>身份证号</th>
                <th>性别</th>
                <th>联系电话</th>
                <th>人员类型</th>
                <th>文化水平</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.idCard}</td>
                  <td>{item.gender}</td>
                  <td>{item.phone}</td>
                  <td>{item.type}</td>
                  <td>{item.edu}</td>
                  <td><button className="action-btn">详情</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 翻页按钮 */}
          <div className="pagination">
            <button>上一页</button>
            <button>下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
