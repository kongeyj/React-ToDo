# React + Vite 项目

## 安装步骤

按照以下步骤在本地设置 React-ToDo：

1. **克隆仓库**：
   ```bash
   git clone https://github.com/kongeyj/React-ToDo.git
   cd react-ToDo
   ```
2. **安装依赖**:
   ```bash
   npm install
   npm i
   ```
3. **启动服务器**:
   ```bush
   npm run dev
   vite
   ```
4. **构建生产环境**:
   ```bush
   npm run build
   ```
5. **代码检查并修复**:
   ```bush
   npm run lint
   ```

## 添加数据库

1. appwrite：https://cloud.appwrite.io/console/organization-66c866e5001f3781ad95
2. 新建数据库、收集表
3. .env 文件夹中添加
   ```bush
   VITE_ENDPOINT=https://cloud.appwrite.io/v1
   VITE_PROJECT_ID=
   VITE_DATABASE_ID=
   VITE_COLLECTION_TASKS_ID=
   ```
