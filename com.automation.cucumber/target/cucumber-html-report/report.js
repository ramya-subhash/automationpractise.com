$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Scenarios.feature");
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
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "While registering, if the email address is incorrect. User should see an error message",
  "description": "",
  "id": "title-of-your-feature;while-registering,-if-the-email-address-is-incorrect.-user-should-see-an-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User has landed on the \"Authentication\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User enters an invalid \"12345\" email address",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User should see an error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication",
      "offset": 24
    }
  ],
  "location": "stepDefinitions.user_has_landed_on_the_page(String)"
});
formatter.result({
  "duration": 17972997998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 24
    }
  ],
  "location": "stepDefinitions.user_enters_an_invalid_email_address(String)"
});
formatter.result({
  "duration": 207198035,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_see_an_error_message()"
});
formatter.result({
  "duration": 602337053,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should be able to register using a valid email address",
  "description": "",
  "id": "title-of-your-feature;user-should-be-able-to-register-using-a-valid-email-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User has landed on the \"Authentication\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User has a valid \"g123456@gmail.in\" email address",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enters the registration details",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User should be able to regiser successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication",
      "offset": 24
    }
  ],
  "location": "stepDefinitions.user_has_landed_on_the_page(String)"
});
formatter.result({
  "duration": 17712887610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "g123456@gmail.in",
      "offset": 18
    }
  ],
  "location": "stepDefinitions.user_has_a_valid_email_address(String)"
});
formatter.result({
  "duration": 205672576,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_enters_the_registration_details()"
});
formatter.result({
  "duration": 7438221631,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_able_to_regiser_successfully()"
});
formatter.result({
  "duration": 21370778,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Check whether Megamenu works (Dresses -\u003e Summer dresses)",
  "description": "",
  "id": "title-of-your-feature;check-whether-megamenu-works-(dresses--\u003e-summer-dresses)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User has landed on the \"Authentication\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User has a valid \"b123456@gmail.in\" email address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User had logged in the application",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User selects \"DRESSES\" menu",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User selects \"Summer Dresses\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User should be able navigate to \"Summer dresses\" menu",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication",
      "offset": 24
    }
  ],
  "location": "stepDefinitions.user_has_landed_on_the_page(String)"
});
formatter.result({
  "duration": 21921419260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "b123456@gmail.in",
      "offset": 18
    }
  ],
  "location": "stepDefinitions.user_has_a_valid_email_address(String)"
});
formatter.result({
  "duration": 205702840,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_has_logged_in_the_application()"
});
formatter.result({
  "duration": 1911119063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRESSES",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects_menu(String)"
});
formatter.result({
  "duration": 6879622036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects_menu(String)"
});
formatter.result({
  "duration": 2359321103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer dresses",
      "offset": 33
    }
  ],
  "location": "stepDefinitions.user_should_be_able_navigate_to_menu(String)"
});
formatter.result({
  "duration": 26732369,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "On the Summer dresses page.Click on Sort By: Price and validate whether the product grid is arranged properly",
  "description": "",
  "id": "title-of-your-feature;on-the-summer-dresses-page.click-on-sort-by:-price-and-validate-whether-the-product-grid-is-arranged-properly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User has landed on the \"Authentication\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User has a valid \"b123456@gmail.in\" email address",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User had logged in the application",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User selects \"DRESSES\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User selects \"Summer Dresses\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User sorts the menu by \"Price: Lowest first\" option",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User should see the \"\" menu sorted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication",
      "offset": 24
    }
  ],
  "location": "stepDefinitions.user_has_landed_on_the_page(String)"
});
formatter.result({
  "duration": 21376056769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "b123456@gmail.in",
      "offset": 18
    }
  ],
  "location": "stepDefinitions.user_has_a_valid_email_address(String)"
});
formatter.result({
  "duration": 218789719,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_has_logged_in_the_application()"
});
formatter.result({
  "duration": 5660585769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRESSES",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects_menu(String)"
});
formatter.result({
  "duration": 5638675845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects_menu(String)"
});
formatter.result({
  "duration": 16295698037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price: Lowest first",
      "offset": 24
    }
  ],
  "location": "stepDefinitions.user_sorts_the_menu_by(String)"
});
formatter.result({
  "duration": 131103161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "stepDefinitions.user_should_see_the_menu_sorted(String)"
});
formatter.result({
  "duration": 84276,
  "status": "passed"
});
});