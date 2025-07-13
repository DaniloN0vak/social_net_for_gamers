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
      volumeMounts:                # ДОДАНО для доступу до docker socket
        - name: docker-sock
          mountPath: /var/run/docker.sock
  volumes:                         # ДОДАНО volume для socket
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
  imagePullSecrets:
    - name: dockerhub-creds
"""
        }
    }

    stages {
        stage('DockerHub Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKERHUB_USERNAME',
                    passwordVariable: 'DOCKERHUB_PASSWORD'
                )]) {
                    sh '''
                        export PATH=$PATH:/usr/bin:/usr/local/bin
                        echo "$DOCKERHUB_PASSWORD" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
                    '''
                }
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

        // ### Опціонально: пуш Docker образу
        // stage('Docker Push') {
        //     steps {
        //         sh 'docker build -t user0107/social_net_for_gamers:latest .'
        //         sh 'docker push user0107/social_net_for_gamers:latest'
        //     }
        // }
    }
}



