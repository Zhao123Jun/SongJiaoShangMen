import React from 'react';
import './style.css';
import avatarImg from '../../assets/image/touxiang.jpg';

export default function ExecutionRecord() {
  // 示例执行记录数据（10条）
  const recordData = [
    { name: '李雷', idCard: '123456199001011234', type: '志愿者', gender: '男', earliest: '2023-01-15', latest: '2023-07-12' },
    { name: '韩梅梅', idCard: '123456199002022345', type: '工作人员', gender: '女', earliest: '2023-02-01', latest: '2023-08-20' },
    { name: '王刚', idCard: '123456199003033456', type: '志愿者', gender: '男', earliest: '2023-03-10', latest: '2023-09-18' },
    { name: '刘婷', idCard: '123456199004044567', type: '工作人员', gender: '女', earliest: '2023-04-05', latest: '2023-10-03' },
    { name: '赵云', idCard: '123456199005055678', type: '志愿者', gender: '男', earliest: '2023-05-12', latest: '2023-11-01' },
    { name: '孙丽', idCard: '123456199006066789', type: '工作人员', gender: '女', earliest: '2023-06-01', latest: '2023-12-10' },
    { name: '周杰', idCard: '123456199007077890', type: '志愿者', gender: '男', earliest: '2023-07-07', latest: '2024-01-08' },
    { name: '郑爽', idCard: '123456199008088901', type: '工作人员', gender: '女', earliest: '2023-08-19', latest: '2024-02-09' },
    { name: '冯明', idCard: '123456199009099012', type: '志愿者', gender: '男', earliest: '2023-09-23', latest: '2024-03-15' },
    { name: '陈雪', idCard: '123456199010101123', type: '工作人员', gender: '女', earliest: '2023-10-02', latest: '2024-04-01' },
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
          <div className="sidebar-title">执行记录</div>
          <hr />
          <button className="sidebar-btn active">执行记录管理</button>
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
                <span className="label">身份证号：</span>
                <input placeholder="请输入身份证号" />
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
          <div className="table-title">执行记录表</div>

          {/* 表格区域 */}
          <table className="data-table">
            <thead>
              <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>身份证号</th>
                <th>人员类型</th>
                <th>性别</th>
                <th>最早执行日期</th>
                <th>最晚执行日期</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {recordData.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.idCard}</td>
                  <td>{item.type}</td>
                  <td>{item.gender}</td>
                  <td>{item.earliest}</td>
                  <td>{item.latest}</td>
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
