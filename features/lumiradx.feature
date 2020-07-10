Feature: LumiraDX blog categories API

#Automated few test cases of LumiraDX /blog/categories API
  @auto
  Scenario: Verify GET operation for blog categories api
     When I perform a GET operation for "/api/blog/categories/"
     Then the response code should be "200"
      And the response body should not be null
  
  @auto
  Scenario: Verify if POST operation is successful for valid category name in the json payload
     When I perform a POST operation for "/api/blog/categories/" with valid category name
     Then the response code should be "201"
      And the new category name should be displayed properly when GET operation is performed
  
  @auto
  Scenario Outline: Verify DELETE operation for blog categories api using <categoryId> category id
     When I perform a DELETE operation for "/api/blog/categories/" using "<categoryId>" category id
     Then the response code should be "<responseCode>"
    Examples: 
      | categoryId | responseCode | 
      | invalid    | 404          | 
      | valid      | 204          | 