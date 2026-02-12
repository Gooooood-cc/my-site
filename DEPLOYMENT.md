# MVP 部署说明

## 方式 1: Vercel CLI 部署

```bash
# 1. 登录 Vercel
npx vercel login

# 2. 部署项目
cd my-site
npx vercel --prod
```

## 方式 2: GitHub 部署（推荐）

### 步骤 1: 创建 GitHub 仓库

```bash
# 在 GitHub 上创建新仓库 my-site

# 本地连接并推送
cd my-site
git remote add origin https://github.com/你的用户名/my-site.git
git branch -M main
git push -u origin main
```

### 步骤 2: 连接 Vercel

1. 访问 https://vercel.com
2. 点击 "Add New Project"
3. 选择你的 GitHub 仓库
4. 配置环境变量：
   - `DEEPSEEK_API_KEY` = 你的 DeepSeek API Key
5. 点击 "Deploy"

## 方式 3: 本地预览

```bash
cd my-site
npm run dev
# 访问 http://localhost:3000
```

## 下一步

1. ✅ 注册 DeepSeek 账号：https://platform.deepseek.com
2. ✅ 获取 API Key
3. ✅ 创建 `.env.local` 文件并填入 API Key
4. 🚀 部署到 Vercel
