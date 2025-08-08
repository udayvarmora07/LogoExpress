pipeline {
    agent any
    stages{
        stage("install dependencies"){
            steps{
                sh "npm install"
            }
        }
        stage("build"){
            steps{
                sh "npm run build"
            }
        }
        stage("nginx"){
            steps{
                sh "cp dist/* /var/www/html/"
            }
        }
    }
}