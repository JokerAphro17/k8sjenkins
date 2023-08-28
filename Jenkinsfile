pipeline {
    agent any
    
    environment {
        DOCKER_HUB_USERNAME = 'jokeru17'
        DOCKER_HUB_PASSWORD = 'Kakare@45'
        APP_VERSION = '1.0.0'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm // Checkout the code from a Git repo
            }
        }
        
        stage('Build Docker Image') {
                agent {
                    docker {
                        image 'node:latest'
                        args '-p 3000:3000'
                    }
                }
            steps {
                script {
                    sh "ls -la"
                    def appImage = "jokeru17/mynodeapp:latest"
                    docker.withRegistry('https://index.docker.io/v1/', '06220f9e-24b2-4ff4-8655-5c2cdd37adfe') {
                        sh "ls -la"
                        def dockerImage = docker.build(appImage)
                        dockerImage.push()
                    }
                }
            }
        }
        
        
    }
}
