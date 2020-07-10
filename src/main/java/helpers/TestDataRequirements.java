package helpers;

import java.io.IOException;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;


public class TestDataRequirements {

	private JSONObject testDataRequirements = new JSONObject();
	
	public TestDataRequirements() {		
	}
	
	@SuppressWarnings("unchecked")
	public void addStringTag(String tag, String value) {
		testDataRequirements.put(tag, value);
	}
	
	@SuppressWarnings("unchecked")
	public void addIntegerTag(String tag, Integer value) {
		testDataRequirements.put(tag, Integer.valueOf(value));
	}
	
	@SuppressWarnings("unchecked")
	public void addDoubleTag(String tag, Double value) {
		testDataRequirements.put(tag, Double.valueOf(value));
	}
	
	@SuppressWarnings("unchecked")
	public void addBooleanTag(String tag, Boolean value) {
		testDataRequirements.put(tag, Boolean.valueOf(value));
	}
	
	@SuppressWarnings("rawtypes")
	public Object getTag(String tag) {	
		Map.Entry pair = (Map.Entry) testDataRequirements.get(tag);		
		return pair.getValue();
	}
	
	@SuppressWarnings("unchecked")
	public void put(String tag, Object value) {
		testDataRequirements.put(tag, value);
	}
	
	public String getString(String tag) {
		return String.valueOf(testDataRequirements.get(tag));
	}
	
	public Boolean getBoolean(String tag) {
		return testDataRequirements.get(tag) == null ? false : (Boolean) testDataRequirements.get(tag);
	}
	
	public Integer getInt(String tag) {
		return (Integer) testDataRequirements.get(tag);
	}

	public Double getDouble(String tag) {
		return (Double) testDataRequirements.get(tag);
	}
	
	public void reset() {
		testDataRequirements = new JSONObject();
	}
	
	public String getObject() throws IOException {
		StringWriter output = new StringWriter();
		testDataRequirements.writeJSONString(output);
	    return output.toString();
	}
	

	public void putArray(String tag, List<String> resources) {
		HashMap<Object, Object> map = new HashMap<>();
		map.put(tag, resources);
	    testDataRequirements.putAll(map);
	}
	
	public List<String> getArray(String tag) {
		List<String> tagData = (List<String>) testDataRequirements.get(tag);
		return tagData;
	}
	
	public void copy(TestDataRequirements testDataRequirements) {		
		this.testDataRequirements = testDataRequirements.testDataRequirements;		
	}
	
}
