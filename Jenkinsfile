pipeline {
    agent any  // 可以替换为具体的节点（如 'nodejs'）

    environment {
        // 定义环境变量
        NODE_ENV = 'production'  // 生产环境
        // DEPLOY_PATH = '/var/www/html'  // 部署目标路径（根据实际情况调整）
    }

    stages {
        stage('Checkout') {
            steps {
                // 从 Git 仓库拉取代码
                git branch: 'master', url: 'http://127.0.0.1:8800/root/morning_web.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // 安装 Node.js 依赖（确保 Jenkins 安装了 NodeJS 插件）
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // 执行构建命令（根据项目类型调整）
                sh 'npm run build'  // Vue/React 通常使用 `npm run build`
            }
            post {
                success {
                    // 构建成功后归档产物（如 dist/ 或 build/）
                    archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'master'  // 仅 main 分支触发部署
            }
            // steps {
            //     // 部署到服务器（示例：SCP 上传到目标路径）
            //     sh '''
            //         scp -r dist/* user@your-server-ip:${DEPLOY_PATH}/
            //         ssh user@your-server-ip "cd ${DEPLOY_PATH} && npm install -g serve && serve -s . -l 80"
            //     '''
            // }
        }
    }

    post {
        always {
            // 清理工作区（可选）
            cleanWs()
        }
        failure {
            // 构建失败时发送通知（如邮件、Slack）
            echo 'Build failed! Check logs.'
        }
    }
}