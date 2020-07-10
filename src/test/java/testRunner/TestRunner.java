package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = { "pretty", "json:target/cucumber.json", "html:target/cucumber-html-report" },
		features = "features",
		glue = "stepDefinitions",
		tags = "@auto",
		dryRun = false,
		strict = true,
		monochrome = true)

public class TestRunner {

}