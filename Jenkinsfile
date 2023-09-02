pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIAL = 'dockerhub-credential'
        IMAGE_NAME = 'jokeru17/mynodeapp'
        PROJECT_ID = 'vm-grand-gbapleu'
        CLUSTER_NAME = 'k8s-env'
        LOCATION = 'us-central1-a'
        CREDENTIALS_ID = 'k8s-credentials'

    }
    stages {
        stage('Build and push image') {
            steps {
                script {
                docker.withRegistry('https://registry.hub.docker.com',DOCKERHUB_CREDENTIAL) {
                    def customImage = docker.build("${IMAGE_NAME}:${env.BUILD_ID}")
                    customImage.push()
                }
                }
        }
        }
        stage('Deploy with kubernetes') {
            steps {
				script
                {
                    sh "gcloud container clusters get-credentials k8s-env --region us-central1 --project vm-grand-gbapleu"
                    sh 'kubectl apply -f deployment.yaml'
                    sh  "kubectl set image deployment/node-app-deployment node-app-container=jokeru17/mynodeapp:${env.BUILD_ID}"
                }
            }
        }
       
    }
}

