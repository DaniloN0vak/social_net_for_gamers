pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/DaniloN0vak/social_net_for_gamers.git'
      }
    }

    stage('Build') {
      steps {
        sh 'dotnet build Social_network.sln'
      }
    }

    stage('Test') {
      steps {
        sh 'dotnet test'
      }
    }
  }
}
