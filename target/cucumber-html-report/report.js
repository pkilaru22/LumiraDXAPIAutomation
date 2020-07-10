$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("lumiradx.feature");
formatter.feature({
  "line": 1,
  "name": "LumiraDX API",
  "description": "",
  "id": "lumiradx-api",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1577983,
  "status": "passed"
});
formatter.before({
  "duration": 545697824,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Automated few test cases of LumiraDX /blog/categories API"
    }
  ],
  "line": 5,
  "name": "Verify GET operation for blog categories api",
  "description": "",
  "id": "lumiradx-api;verify-get-operation-for-blog-categories-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@auto"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I perform a GET operation for \"/api/blog/categories/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the response code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the response body should not be null",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/blog/categories/",
      "offset": 31
    }
  ],
  "location": "LumiraStepDefinitions.i_perform_a_get_operation_for(String)"
});
formatter.result({
  "duration": 798509392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "LumiraStepDefinitions.the_response_code_should_be(String)"
});
formatter.write("Asserting Response Status Code is: 200");
formatter.result({
  "duration": 1448878,
  "status": "passed"
});
formatter.match({
  "location": "LumiraStepDefinitions.the_response_body_should_not_be_null()"
});
formatter.write("Response Body: [{\"id\": 1, \"name\": \"Sci-Fi\"}, {\"id\": 2, \"name\": \"Politics\"}, {\"id\": 3, \"name\": \"Tech\"}]\n");
formatter.result({
  "duration": 82942787,
  "status": "passed"
});
formatter.before({
  "duration": 57259,
  "status": "passed"
});
formatter.before({
  "duration": 2665079,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify if POST operation is successful for valid category name in the json payload",
  "description": "",
  "id": "lumiradx-api;verify-if-post-operation-is-successful-for-valid-category-name-in-the-json-payload",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@auto"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I perform a POST operation for \"/api/blog/categories/\" with valid category name",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the response code should be \"201\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the new category name should be displayed properly when GET operation is performed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/blog/categories/",
      "offset": 32
    }
  ],
  "location": "LumiraStepDefinitions.i_perform_a_post_operation_with_valid_json_payload(String)"
});
formatter.write("Posted category name: xksnewyxvq");
formatter.result({
  "duration": 371511963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 29
    }
  ],
  "location": "LumiraStepDefinitions.the_response_code_should_be(String)"
});
formatter.write("Asserting Response Status Code is: 201");
formatter.result({
  "duration": 325452,
  "status": "passed"
});
formatter.match({
  "location": "LumiraStepDefinitions.the_category_name_should_be_displayed_properly_when_get_operation_is_performed()"
});
formatter.write("Asserting new category name is: xksnewyxvq");
formatter.result({
  "duration": 381678224,
  "error_message": "org.junit.ComparisonFailure: Category name has not been posted correctly. Expected: xksnewyxvq but actual name is: ksnewyxvq expected:\u003c[x]ksnewyxvq\u003e but was:\u003c[]ksnewyxvq\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat stepDefinitions.LumiraStepDefinitions.the_category_name_should_be_displayed_properly_when_get_operation_is_performed(LumiraStepDefinitions.java:73)\n\tat ✽.And the new category name should be displayed properly when GET operation is performed(lumiradx.feature:14)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify DELETE operation for blog categories api using \u003ccategoryId\u003e category id",
  "description": "",
  "id": "lumiradx-api;verify-delete-operation-for-blog-categories-api-using-\u003ccategoryid\u003e-category-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@auto"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I perform a DELETE operation for \"/api/blog/categories/\" using \"\u003ccategoryId\u003e\" category id",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the response code should be \"\u003cresponseCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "lumiradx-api;verify-delete-operation-for-blog-categories-api-using-\u003ccategoryid\u003e-category-id;",
  "rows": [
    {
      "cells": [
        "categoryId",
        "responseCode"
      ],
      "line": 21,
      "id": "lumiradx-api;verify-delete-operation-for-blog-categories-api-using-\u003ccategoryid\u003e-category-id;;1"
    },
    {
      "cells": [
        "invalid",
        "404"
      ],
      "line": 22,
      "id": "lumiradx-api;verify-delete-operation-for-blog-categories-api-using-\u003ccategoryid\u003e-category-id;;2"
    },
    {
      "cells": [
        "valid",
        "204"
      ],
      "line": 23,
      "id": "lumiradx-api;verify-delete-operation-for-blog-categories-api-using-\u003ccategoryid\u003e-category-id;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44415,
  "status": "passed"
});
formatter.before({
  "duration": 2621859,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify DELETE operation for blog categories api using invalid category id",
  "description": "",
  "id": "lumiradx-api;verify-delete-operation-for-blog-categories-api-using-\u003ccategoryid\u003e-category-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@auto"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I perform a DELETE operation for \"/api/blog/categories/\" using \"invalid\" category id",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the response code should be \"404\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/blog/categories/",
      "offset": 34
    },
    {
      "val": "invalid",
      "offset": 64
    }
  ],
  "location": "LumiraStepDefinitions.i_perform_a_delete_operation_for_using_category_id(String,String)"
});
formatter.result({
  "duration": 167415373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 29
    }
  ],
  "location": "LumiraStepDefinitions.the_response_code_should_be(String)"
});
formatter.write("Asserting Response Status Code is: 404");
formatter.result({
  "duration": 545795,
  "status": "passed"
});
formatter.before({
  "duration": 45648,
  "status": "passed"
});
formatter.before({
  "duration": 1761667,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify DELETE operation for blog categories api using valid category id",
  "description": "",
  "id": "lumiradx-api;verify-delete-operation-for-blog-categories-api-using-\u003ccategoryid\u003e-category-id;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@auto"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I perform a DELETE operation for \"/api/blog/categories/\" using \"valid\" category id",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the response code should be \"204\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/blog/categories/",
      "offset": 34
    },
    {
      "val": "valid",
      "offset": 64
    }
  ],
  "location": "LumiraStepDefinitions.i_perform_a_delete_operation_for_using_category_id(String,String)"
});
formatter.result({
  "duration": 183488594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 29
    }
  ],
  "location": "LumiraStepDefinitions.the_response_code_should_be(String)"
});
formatter.write("Asserting Response Status Code is: 204");
formatter.result({
  "duration": 514290,
  "status": "passed"
});
});