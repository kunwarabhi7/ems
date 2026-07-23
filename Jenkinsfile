pipeline {
    agent any
    
    tools {
    nodejs "Node24"
    }

    stages {

        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Install Client Dependencies") {
            steps {
                dir("client") {
                    sh "npm install"
                }
            }
        }

        stage("Build Client") {
            steps {
                dir("client") {
                    sh "npm run build"
                }
            }
        }

        stage("Install Server Dependencies") {
            steps {
                dir("server") {
                    sh "npm install"
                }
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