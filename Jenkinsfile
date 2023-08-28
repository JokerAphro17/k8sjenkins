pipeline {
    agent 'buit-in'
    
    environment {
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

                    
                    withCredentials([usernamePassword(credentialsId: '06220f9e-24b2-4ff4-8655-5c2cdd37adfe	', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    def appImage = "jokeru17/mynodeapp:${APP_VERSION}"
                    
                    docker.withRegistry('https://index.docker.io/v1/', ${DOCKER_HUB_USERNAME}, ${DOCKER_HUB_PASSWORD}) {
                        def dockerImage = docker.build(appImage, './path/to/app')
                        dockerImage.push()
                    }}
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    def kubeconfigFile = writeFile file: 'kubeconfig', text: env.KUBECONFIG
                    def kubeconfigEnv = "KUBECONFIG=${kubeconfigFile}"
                    
                    sh "kubectl ${kubeconfigEnv} apply -f ./path/to/deployment.yaml"
                }
            }
        }
    }
}
