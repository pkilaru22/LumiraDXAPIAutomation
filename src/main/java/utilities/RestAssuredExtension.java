package utilities;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;

import cucumber.api.Scenario;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;

public class RestAssuredExtension {

	public static RequestSpecification Request;

	public RestAssuredExtension() {
		//Arrange
		RequestSpecBuilder builder = new RequestSpecBuilder();
		builder.setBaseUri("http://amlumira.eu.pythonanywhere.com");
		builder.setContentType(ContentType.JSON);
		RequestSpecification requestSpec = builder.build();
		Request = RestAssured.given().spec(requestSpec);
	}

	public static ResponseOptions<Response> getOperation(String url) {
		//Act
		try {
			return Request.get(new URI(url));
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static ResponseOptions<Response> postOperationWithBody(String url,Map<String, String> body)  {
		//Act
		Request.body(body);
		try {
			return Request.post(new URI(url));
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static ResponseOptions<Response> deleteOperation(String url) {
		//Act
		try {
			return Request.delete(new URI(url));
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		return null;
	}

}
