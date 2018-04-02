package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (features = "Features/Scenarios.feature", glue={"stepDefinitions"}, plugin= {"html:target/cucumber-html-report"})
public class TestRunner {
	

}
