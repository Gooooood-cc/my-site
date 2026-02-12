# GitHub + Vercel 部署指南

## 步骤 1: 创建 GitHub 仓库

1. 打开浏览器，访问 https://github.com
2. 登录你的 GitHub 账号
3. 点击右上角 "+" → "New repository"
4. 填写信息：
   - Repository name: `my-site`
   - Description: "我的个人网站 - Next.js + DeepSeek AI"
   - Public (选择 Public)
   - 不要勾选 "Add a README file" (我们已有代码)
5. 点击 "Create repository"

## 步骤 2: 推送代码到 GitHub

在终端中执行以下命令：

```bash
cd my-site

# 1. 重命名当前分支为 main
git branch -M main

# 2. 添加远程仓库（将 yourusername 替换为你的 GitHub 用户名）
git remote add origin https://github.com/你的用户名/my-site.git

# 3. 推送到 GitHub
git push -u origin main
```

**如果遇到错误，可能需要先执行**：
```bash
# 先拉取（因为我们本地有 commit）
git pull origin main --allow-unrelated-histories
# 选择 "merge" 或直接按默认
# 然后再推送
git push -u origin main
```

## 步骤 3: 连接 Vercel

1. 打开 https://vercel.com
2. 点击 "Add New Project"
3. 选择 "Import Git Repository"
4. 选择你刚创建的 `my-site` 仓库
5. 配置项目设置：
   - Framework Preset: **Next.js** (应该自动检测)
   - Root Directory: `.` (保持默认)
6. **重要**: 添加环境变量
   - 点击 "Environment Variables"
   - 添加:
     - Name: `DEEPSEEK_API_KEY`
     - Value: `你的DeepSeek API密钥`
7. 点击 "Deploy"

## 步骤 4: 验证部署

部署完成后，你会看到一个链接，例如：
```
https://my-site.vercel.app
或
https://my-site-xxx.vercel.app
```

点击链接，检查：
- ✅ 首页是否正常显示
- ✅ AI 助手按钮是否可见
- ✅ 发送消息是否正常工作

## 后续更新

以后更新网站只需要：

```bash
# 修改代码后
git add .
git commit -m "更新说明"
git push origin main
```

Vercel 会自动检测到 GitHub 的更新，并重新部署。

## 常见问题

### Q: GitHub 推送失败？
A: 可能原因：
1. 没有登录 GitHub - 先登录
2. 仓库已存在 - 删除或换个名字
3. SSH key 没配置 - 使用 HTTPS 方式推送

### Q: Vercel 部署失败？
A: 检查：
1. 环境变量是否添加了 `DEEPSEEK_API_KEY`
2. API Key 是否有效
3. 查看 Vercel 的错误日志

### Q: AI 对话不工作？
A: 
1. 检查 API Key 是否正确配置
2. 查看浏览器控制台是否有错误
3. 确认 DeepSeek 账号有余额

## 总结

完成以下步骤即可上线：
1. ✅ 创建 GitHub 仓库
2. ✅ 推送代码
3. ✅ 连接 Vercel 并添加 API Key
4. ✅ 访问你的网站！

祝你部署顺利！🎉
