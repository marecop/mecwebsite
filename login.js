document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log(`发送登录请求: ${username}, ${password}`); // 调试信息

  try {
    const response = await fetch('https://mportalm-07a8f9406d21.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    console.log(`响应状态码: ${response.status}`); // 调试响应状态码

    const data = await response.json();

    if (data.success) {
      console.log('登录成功:', data); // 调试成功响应
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      window.location.href = 'dash.html';
    } else {
      console.error('登录失败:', data.message); // 调试错误响应
      document.getElementById('message').textContent = data.message;
    }
  } catch (error) {
    console.error('网络错误:', error); // 调试网络错误
    document.getElementById('message').textContent = '网络错误，请稍后重试';
  }
});
