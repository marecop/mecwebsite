// 检查登录状态
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (!loggedInUser) {
  window.location.href = 'login.html'; // 未登录时重定向到登录页面
} else {
  // 设置用户信息
  document.getElementById('user-avatar').src = loggedInUser.avatar;
  document.getElementById('user-name')?.textContent = loggedInUser.name;
  document.getElementById('user-role')?.textContent = loggedInUser.role;

  // 退出登录
  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });
}
