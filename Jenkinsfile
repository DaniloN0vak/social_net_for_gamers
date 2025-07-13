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
  imagePullSecrets:
    - name: dockerhub-creds
"""
        }
    }

    environment {
        DOCKERHUB_USERNAME = credentials('dockerhub-creds', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')
    }

    stages {
        stage('DockerHub Login') {
            steps {
                sh 'echo "$DOCKERHUB_PASSWORD" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin'
            }
        }

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

        // опціонально — якщо хочеш пушити образ:
        // stage('Docker Push') {
        //     steps {
        //         sh 'docker build -t user0107/social_net_for_gamers:latest .'
        //         sh 'docker push user0107/social_net_for_gamers:latest'
        //     }
        // }
    }
}



