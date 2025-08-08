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
                sh '''
                    echo "uday007" | sudo -S mkdir -p /var/www/logo-express/
                    sudo cp -r dist/* /var/www/logo-express
                '''
            }
        }
    }
}