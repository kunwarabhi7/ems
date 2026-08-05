pipeline {
    agent any
    
    environment {
        NEXT_PUBLIC_API_URL="/api/v1"
    }

    stages {

        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage('Docker Build'){
            steps{
                sh "docker compose build"
            }
        }

        stage("Deploy Application"){
            steps{
                sh 'docker compose down'
                sh 'docker compose up -d'
            }
        }

    }
    
    post {
        success {
            echo "Build Successful"
        }

        failure {
            echo "Build Failed"
        }
    }
}
