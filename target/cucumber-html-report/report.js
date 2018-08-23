$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 24,
  "name": "As per the user story US1790 validate the Login functionality of the OrangeHRM",
  "description": "",
  "id": "title-of-your-feature;as-per-the-user-story-us1790-validate-the-login-functionality-of-the-orangehrm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I want to launch the firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "i need to maximize it",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "it maximizes enter the url",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I need to enter valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Tc_01_ValidateLoginForm.runBrowser()"
});
formatter.result({
  "duration": 9384537059,
  "status": "passed"
});
formatter.match({
  "location": "Tc_01_ValidateLoginForm.maximizeBrowser()"
});
formatter.result({
  "duration": 294252973,
  "status": "passed"
});
formatter.match({
  "location": "Tc_01_ValidateLoginForm.enterURL()"
});
formatter.result({
  "duration": 1357697863,
  "status": "passed"
});
formatter.match({
  "location": "Tc_01_ValidateLoginForm.EnterCredentials()"
});
formatter.result({
  "duration": 4771293043,
  "status": "passed"
});
});