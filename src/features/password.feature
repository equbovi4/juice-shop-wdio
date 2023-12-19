Feature: Password Change
    This feature is for changing password

  Background:
    Given I open register page
    And I register a new account

  @PasswordChange
  Scenario: Forgot Password
    When I am on login page
    And I press 'forgot-password'
    And I enter email in forgot email page
    And I click on security question field
    And I see security question
    And I enter security answer
    And I enter new password and confirm
    Then I see message about successfully changed password
