Feature: Search on Google
  As an anonymous user, I want to use Google to search something

  Scenario: Open Google
    Given I open the Google homepage
    Then the page title should contain "Google"

  Scenario: Search something on Google
    Given I open the Google homepage

    When I fill field "Search" with "Test"
    And I press enter
    Then the page title should contain "Test"