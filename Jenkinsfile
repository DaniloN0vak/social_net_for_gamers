pipeline {
  agent {
    kubernetes {
      label 'dotnet'
      defaultContainer 'jnlp'
    }
  }

  stages {
    stage('Build') {
      steps {
        container('jnlp') {
          sh 'dotnet build Social_network.sln'
        }
      }
    }

    stage('Test') {
      steps {
        container('jnlp') {
          sh 'dotnet test'
        }
      }
    }
  }
}


