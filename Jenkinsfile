pipeline {
    agent any

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