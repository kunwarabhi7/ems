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

        stage("Check Node"){
            steps{
                sh "node -v"
                sh "npm -v"

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