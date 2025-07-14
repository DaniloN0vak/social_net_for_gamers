pipeline {
    agent {
        kubernetes {
            label 'dotnet-agent'
            defaultContainer 'dotnet'
            yaml """
apiVersion: v1
kind: Pod
spec:
  securityContext:
    fsGroup: 123
  containers:
    - name: dotnet
      image: user0107/jenkins-agent-dotnet:8
      imagePullPolicy: Always
      tty: true
      command:
        - cat
      volumeMounts:
        - name: docker-sock
          mountPath: /var/run/docker.sock
        - name: kubeconfig
          mountPath: /home/jenkins/.kube
  volumes:
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
    - name: kubeconfig
      secret:
        secretName: k3s-kubeconfig
  imagePullSecrets:
    - name: dockerhub-creds
"""
        }
    }

    environment {
        DOCKER_BUILDKIT = '1'
        IMAGE_NAME = 'user0107/social-net-app:latest'
    }

    stages {
        stage('Install frontend deps & build') {
            steps {
                dir('front_net') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
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
                        echo "$DOCKERHUB_PASSWORD" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
                    '''
                }
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Apply DB Migrations') {
            steps {
                sh 'dotnet ef database update --project Social_network/ --startup-project Social_network/'
            }
        }

        stage('Deploy to K3s') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }
}


