I have automated few of the test cases using Selenium, Java, Rest-Assured, Cucumber BDD framework.

Please install java and maven in your system. This project should run on environment having JDK and maven installed.

'lumiradx.feature' file in the features folder has gherkin scenarios for automated test cases. I have randomly picked few of the manual test cases and have written automation scripts for them.

To run the automation test cases:
Download the github project, extract its contents and
* either:
Import the folder into an IDE, Right-click on the TestRunner file ( present in the src/test/java folder ) and Run as Junit test.
* or:
open the terminal, 

```
cd path_to_workspace
cd LumiraDXAPIAutomation 
```
and then do 

```
mvn clean
mvn test
```

Result/report will be generated in the target/cucmber-html-report folder as index.html. Click on it or copy the path to browser to view it. (Although with cucumber we can generate pretty html reports which gives overview of all features and scenarios, for now I have generated only index.html as there are only few test cases in this project.) 

If you don't find the index.html, please refresh the target/cucmber-html-report folder.
