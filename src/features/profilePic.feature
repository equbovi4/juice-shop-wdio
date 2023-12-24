Feature: Uploading a profile picture
  This feature checks if User can upload a profile picture

  Background: 
    Given I open landing page
    And I have registered a new user using API
    And I have logged in

  @ProfilePic
  Scenario: Upload a profile pic
    When I open profile page
    And I upload a profile image
    Then I see new profile image
