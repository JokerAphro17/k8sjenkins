pipeline {
    agent any
    environment {
        DOCKER_HUB_USERNAME = 'jokeru17'
        DOCKER_HUB_PASSWORD = 'Kakare@45'
        APP_VERSION = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm // Checkout the code from a Git repo
            }
        }
        
        // stage('Build Docker Image') {
        //  steps {
        //      script {
        //          sh "docker build -t ${DOCKER_HUB_USERNAME}/mynodeapp:${APP_VERSION} ."
        //      }
        //  }
    }

    

    stage('Push Docker cImage') {
        steps {
            script {
                withDockerRegistry([credentialsId: '06220f9e-24b2-4ff4-8655-5c2cdd37adfe', url: '']) {
                    sh "docker push ${DOCKER_HUB_USERNAME}/mynodeapp:${APP_VERSION}"
                }
            }
        }
    }
}
}
