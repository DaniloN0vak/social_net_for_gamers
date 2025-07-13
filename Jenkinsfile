pipeline {
    agent {
        kubernetes {
            label 'dotnet-agent'
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
                sh 'dotnet build Social_network.sln'
            }
        }

        stage('Test') {
            steps {
                sh 'dotnet test Social_network.sln'
            }
        }
    }
}



