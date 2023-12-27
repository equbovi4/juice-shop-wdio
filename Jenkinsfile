pipeline {
    agent any

    tools { nodejs "21.1.0" }

    parameters {
        string(name: 'BROWSER', defaultValue: 'chrome', description: 'Browser on which tests will be executed')
        
        choice(name: 'SCENARIOS', choices: ['Checkout', 'PasswordChange', 'ProfilePic', 'All'], description: 'Pick scenarios to run')

        booleanParam(name: 'HEADLESS', defaultValue: false, description: 'Headless type')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh "npm install"
                }
            }
        }

        // stage('Delete previous reports') {
        //     steps {
        //         script {
        //             sh "npm run deleteReports"
        //         }
        //     }
        // }

        stage("Test Execution") {
            steps {
                script {
                    def browser = params.BROWSER
                    def scenario = params.SCENARIOS
                    def headless = params.HEADLESS

                    try {
                        def commandToRun = performTestExecution(browser, scenario, headless)
                        commandToRun = commandToRun + " --allure='true'"
                        sh commandToRun
                    } catch (Exception e) {
                        echo "Error: ${e.message}"
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }
}

def performTestExecution(browser, scenario, headless) {
    if (scenario == "All") {        
        return "npm run wdio -- --browser='${browser}' --headless='${headless}'"
    } else {
        return "npm run wdio -- --cucumberOpts.tagExpression='@${scenario}' --browser='true' --headless='${headless}'"
    }
}