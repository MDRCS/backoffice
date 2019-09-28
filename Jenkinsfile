#!/usr/bin/env groovy

node {
  def app

  stage("Clone") {
    git 'https://github.com/MDRCS/backoffice.git'
  }

  stage("Build") {
    app = docker.build("mdrahali/backoffice")
  }

  stage("Push") {
    docker.withRegistry("https://registry.hub.docker.com", "docker-hub-credentials") {
      app.push("${env.BUILD_ID}")
      app.push("latest")
    }
  }

  stage("Deploy") {
    sh "ssh root@157.245.181.196 \"docker stop ast_0 && \
        docker rm ast_0 && \
        docker pull mdrahali/backoffice:latest && \
        docker run -d --name=ast_0 -p 8080:80 mdrahali/backoffice:latest\""
  }
}


// node {
//     def app

//     stage('Clone repository') {
//         /* Cloning the Repository to our Workspace */

//         checkout scm
//     }

//     stage('Build image') {
//         /* This builds the actual image */

//         app = docker.build("anandr72/nodeapp")
//     }

//     stage('Test image') {
        
//         app.inside {
//             echo "Tests passed"
//         }
//     }

//     stage('Push image') {
//         /* 
// 			You would need to first register with DockerHub before you can push images to your account
// 		*/
//         docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
//             app.push("${env.BUILD_NUMBER}")
//             app.push("latest")
//             } 
//                 echo "Trying to Push Docker Build to DockerHub"
//     }
// }

// #!/usr/bin/env groovy

// pipeline {

//     agent {
//         docker {
//             image 'node'
//             args '-u root'
//         }
//     }

//     stages {
//         stage('Build') {
//             steps {
//                 echo 'Building...'
//                 sh 'npm install'
//             }
//         }
//         stage('Test') {
//             steps {
//                 echo 'Testing...'
//                 sh 'npm upgrade'
//             }
//         }
//     }
// }

