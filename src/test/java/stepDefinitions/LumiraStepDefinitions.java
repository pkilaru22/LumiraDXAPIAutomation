package stepDefinitions;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.hasItem;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.DataGenerator;
import helpers.TestDataRequirements;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import utilities.RestAssuredExtension;

public class LumiraStepDefinitions {


	public static ResponseOptions<Response> response;
	TestDataRequirements testData = new TestDataRequirements();
	private Scenario scenario;

	@Before
	public void setUpScenario(Scenario scenario) {
		this.scenario = scenario;
	}


	@When("^I perform a GET operation for \"([^\"]*)\"$")
	public void i_perform_a_get_operation_for(String requestUrl) throws Throwable {
		// Performing the Get operation
		response = RestAssuredExtension.getOperation(requestUrl);
	}

	@When("^I perform a POST operation for \"([^\"]*)\" with valid category name$")
	public void i_perform_a_post_operation_with_valid_json_payload(String requestUrl) throws Throwable {
		String name = DataGenerator.generateRandomString();
		//Setting the payload for post operation
		Map<String, String> body = new HashMap<>();
		body.put("name", name);

		testData.put("name", name);

		//Performing POST operation
		response = RestAssuredExtension.postOperationWithBody(requestUrl, body);
		scenario.write("Posted category name: " + name);

	}

	@And("^the new category name should be displayed properly when GET operation is performed$")
	public void the_category_name_should_be_displayed_properly_when_get_operation_is_performed() throws Throwable {
		response = RestAssuredExtension.getOperation("/api/blog/categories/");
		//Getting the newly added category name
		List<String> names = response.getBody().jsonPath().get("name");
		String actualCategoryName = names.get(names.size() - 1);

		String expectedCategoryName = testData.getString("name"); 
		//Asserting if the newly posted category name is displayed properly without any errors
		scenario.write("Asserting new category name is: " + expectedCategoryName);
		assertEquals("Category name has not been posted correctly. Expected: " + expectedCategoryName + " but actual name is: " + actualCategoryName, expectedCategoryName, actualCategoryName);
	}

	@When("^I perform a DELETE operation for \"([^\"]*)\" using \"([^\"]*)\" category id$")
	public void i_perform_a_delete_operation_for_using_category_id(String requestUrl, String categoryIdValidity) throws Throwable {
		//Get the last blog category id
		response = RestAssuredExtension.getOperation("/api/blog/categories/");
		List<Integer> categoryIds = response.getBody().jsonPath().get("id");
		int lastCategoryId = categoryIds.get(categoryIds.size() - 1);

		//If you want to test delete operation for invalid category id, add + 1 to last category Id else use last category Id
		int categoryId = categoryIdValidity.equals("invalid") ? lastCategoryId + 1 : lastCategoryId;
		requestUrl = requestUrl + categoryId;
		
		//Perform DELETE operation
		response = RestAssuredExtension.deleteOperation(requestUrl);
	}
	
	@Then("^the response code should be \"([^\"]*)\"$")
	public void the_response_code_should_be(String responseCode) throws Throwable {
		int statusCode = Integer.parseInt(responseCode);
		// Verifying the success status code
		scenario.write("Asserting Response Status Code is: " + responseCode);
		assertEquals("Unexpected Status code: ", statusCode, response.getStatusCode()); 
	}

	@And("^the response body should not be null$")
	public void the_response_body_should_not_be_null() throws Throwable {
		//Checking the Response body in GET request
		scenario.write("Response Body: " + response.getBody().asString());          
		assertThat("Unexpected response body", Arrays.asList(response.getBody().asString()), notNullValue());
	}
	


}
