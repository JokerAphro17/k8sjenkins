pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIAL = 'dockerhub-credential'
        IMAGE_NAME = 'jokeru17/mynodeapp'
    }
    stages {
        stage('Build and push image') {
            steps {
                docker.withRegistry('https://registry.hub.docker.com',DOCKERHUB_CREDENTIAL) {
                    def customImage = docker.build("${IMAGE_NAME}:${env.BUILD_ID}")
                    customImage.push()
                }
        }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}