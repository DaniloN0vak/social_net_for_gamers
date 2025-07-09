pipeline {
  agent any

  stages {
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

