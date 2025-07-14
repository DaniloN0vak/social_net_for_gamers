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
      volumeMounts:
        - name: docker-sock
          mountPath: /var/run/docker.sock
  volumes:
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
  imagePullSecrets:
    - name: dockerhub-creds
"""
        }
    }

    stages {
        stage('Check Docker Availability') {
            steps {
                sh '''
                  echo "Checking Docker binary..."
                  which docker || echo "docker not found"
                  echo "Docker version:"
                  docker --version || echo "cannot get version"
                  echo "Listing /usr/bin and /usr/local/bin:"
                  ls -l /usr/bin/docker || echo "not found in /usr/bin"
                  ls -l /usr/local/bin/docker || echo "not found in /usr/local/bin"
                  echo "Checking Docker socket:"
                  ls -l /var/run/docker.sock || echo "socket missing"
                '''
            }
        }

        stage('DockerHub Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKERHUB_USERNAME',
                    passwordVariable: 'DOCKERHUB_PASSWORD'
                )]) {
                    sh '''
                        echo "$DOCKERHUB_PASSWORD" | /usr/bin/docker login -u "$DOCKERHUB_USERNAME" --password-stdin
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                sh 'dotnet build Social_network.sln'
                sh 'docker version'
                sh 'docker info'
            }
        }

        stage('Test') {
            steps {
                sh 'dotnet test Social_network.sln'
            }
        }

        stage('Docker Push') {
            steps {
                echo 'Docker push is not implemented yet.'
                // Приклад для майбутнього:
                // sh 'docker push your-image-name'
            }
        }
    }
}



