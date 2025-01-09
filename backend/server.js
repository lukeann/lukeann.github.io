const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5050;

// 设置文件存储路径
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// 静态文件服务
app.use(express.static('public'));

// 身份验证中间件
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === 'my-secret-key') {
    next(); // 验证通过，继续执行下一个中间件或路由
  } else {
    res.status(401).send('Unauthorized'); // 验证失败，返回 401 错误
  }
};

app.get('/', (req, res) => {
  res.send('Welcome to my website!');
});

// 保护后台管理界面
app.use('/admin.html', auth);

// 文件上传路由
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});