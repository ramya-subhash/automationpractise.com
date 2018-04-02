# automationpractise.com
To test automationpractise.com using Selenium automation

Version Specifications
1. Selenium: 3.11.0
2. Java: 1.8
3. jUnit: 4.11
4. Cucumber: 1.2.2
5. Cucumber-jvm-deps: 1.0.5
6. Guava: 23.0
7. Maven : 3.5.3

Browsers:
1. Firefox and chrome
2. Default browser if not speified is "chrome"

Scenarios: 
1. User should be able to register using a valid email address
2. While registering, if the email address is incorrect. User should see an error message
3. Check whether Megamenu works (Dresses -> Summer dresses)
4. On the Summer dresses page.Click on Sort By: Price and validate whether the product grid is arranged properly

Setting up maven 
1. export M2_HOME=/Users/subhashr/downloads/apache-maven-3.5.3  
2. export M2=$M2_HOME/bin 
3. export PATH=$M2:$PATH
4. mvn -version

Commands to run scripts from command line
1. mvn clean test -Dbrowser="chrome"
2. mvn clean test ---> this will execute the scripts in chrome browser, because default is chrome browser if not specified 

Reports
1. Please refer to /Users/subhashr/Documents/Mobile_Automation/Workspace/com.automation.cucumber/target/surefire-reports  path for the individual test results.

