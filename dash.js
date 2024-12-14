// 检查用户是否已登录
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (!loggedInUser) {
  // 未登录，跳转回登录页面
  window.location.href = 'login.html';
} else {
  // 加载用户信息
  document.getElementById('employee-name').textContent = loggedInUser.name;
  document.getElementById('employee-position').textContent = `职位: ${loggedInUser.position}`;

  // 加载时间表
  const scheduleList = document.getElementById('schedule');
  if (loggedInUser.schedule && Array.isArray(loggedInUser.schedule)) {
    loggedInUser.schedule.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      scheduleList.appendChild(listItem);
    });
  }

  // 显示额外内容
  const extraContent = document.getElementById('extra-content');
  if (loggedInUser.extraContent) {
    extraContent.innerHTML = `<p>${loggedInUser.extraContent}</p>`;
  }
}

// 退出登录功能
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
});
