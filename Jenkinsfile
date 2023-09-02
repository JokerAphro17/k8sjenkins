// pipeline {
//     agent any
//     environment {
//         DOCKER_HUB_USERNAME = 'jokeru17'
//         DOCKER_HUB_PASSWORD = 'Kakare@45'
//         APP_VERSION = 'latest'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 checkout scm // Checkout the code from a Git repo
//             }
//         }
        
//     //     stage('Build Docker Image') {
//     //      steps {
//     //          script {
//     //              sh "docker build -t ${DOCKER_HUB_USERNAME}/mynodeapp:${APP_VERSION} ."
//     //          }
//     //      }
//     // }

    

//     stage('Push Docker cImage') {
//         steps {
//             script {
//                 withDockerRegistry([credentialsId: '8e011261-97ee-49d5-bfa3-d17ae686719d', url: '']) {
//                     sh "docker push ${DOCKER_HUB_USERNAME}/mynodeapp:${APP_VERSION}"
//                 }
//             }
//         }
//     }
// }
// }

node {
    checkout scm

   docker.withRegistry('https://registry.hub.docker.com/v2/', 'dockerhub-credential') {

        def customImage = docker.build("jokeru17/mynodeapp:latest")
        customImage.push()
    }
   'dockerhub-credential') {

        def customImage = docker.build("jokeru17/mynodeapp:latest")
        customImage.push()
    }
}
