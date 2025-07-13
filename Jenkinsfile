pipeline {
    agent {
        kubernetes {
            label 'dotnet'
            defaultContainer 'dotnet'
            yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: dotnet
    image: user0107/jenkins-agent-dotnet:8
    command:
    - cat
    tty: true
"""
        }
    }

    stages {
        stage('Build') {
            steps {
                container('dotnet') {
                    sh 'dotnet build Social_network.sln'
                }
            }
        }

        stage('Test') {
            steps {
                container('dotnet') {
                    sh 'dotnet test Social_network.sln'
                }
            }
        }
    }
}



