pipeline {
  agent any

  environment {
    CI = 'true'
    REPORT_PATH = 'reports/cucumber-report.json'
    BROWSER = 'chromium'
    HEADLESS = 'true'
  }

  triggers {
    pollSCM('H/5 * * * *')
    githubPush()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm ci'
          } else {
            bat 'npm ci'
          }
        }
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        script {
          if (isUnix()) {
            sh 'npx playwright install chromium'
          } else {
            bat 'npx playwright install chromium'
          }
        }
      }
    }

    stage('Lint') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm run lint'
          } else {
            bat 'npm run lint'
          }
        }
      }
    }

    stage('Run Tests') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm test'
          } else {
            bat 'npm test'
          }
        }
      }
    }

    stage('Generate Report') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm run report:generate'
          } else {
            bat 'npm run report:generate'
          }
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'reports/**, screenshots/**, logs/**', fingerprint: true
    }
  }
}
