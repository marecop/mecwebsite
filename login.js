document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
      // 登录成功，将用户信息存储到 localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      // 跳转到员工主页
      window.location.href = 'dashboard.html';
    } else {
      // 显示错误消息
      document.getElementById('message').textContent = data.message;
    }
  } catch (error) {
    document.getElementById('message').textContent = '网络错误，请稍后重试';
  }
});
