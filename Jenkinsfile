pipeline {
    agent {
        label 'jenkins-agent-docker-00022ec4jjk99'
    }
    
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
            steps {
                script {
                    def appImage = "jokeru17/mynodeapp:${APP_VERSION}"
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_HUB_USERNAME, DOCKER_HUB_PASSWORD) {
                        def dockerImage = docker.build(appImage, './path/to/app')
                        dockerImage.push()
                    }
                }
            }
        }
        
        
    }
}
