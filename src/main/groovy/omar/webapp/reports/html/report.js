$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature");
formatter.feature({
  "name": "TLVUserInterface",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.scenario({
  "name": "Start selenium",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "I am starting the tlv ui selenium server",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:30"
});
formatter.result({
  "error_message": "java.io.IOException: Cannot run program \"Xvfb\": error\u003d2, No such file or directory\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure1.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:34)\n\tat ✽.I am starting the tlv ui selenium server(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:11)\nCaused by: java.io.IOException: error\u003d2, No such file or directory\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure1.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:34)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:170)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.lambda$execute$0(GroovyStepDefinition.java:69)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:68)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\n\tat cucumber.runtime.Runtime$1.run(Runtime.java:82)\n\tat cucumber.runtime.Runtime$SameThreadExecutorService.execute(Runtime.java:217)\n\tat cucumber.runtime.Runtime.run(Runtime.java:79)\n\tat cucumber.api.cli.Main.run(Main.java:26)\n\tat cucumber.api.cli.Main.main(Main.java:8)\n\tat cucumber.api.cli.Main$main.call(Unknown Source)\n\tat omar.cucumber.frontend.test.CucumberTest.startTest(CucumberTest.groovy:36)\n\tat omar.cucumber.frontend.test.CucumberTest$startTest.call(Unknown Source)\n\tat omar.cucumber.frontend.test.Application.main(Application.groovy:13)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Start browsers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "I am creating the tlv browsers",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:54"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TLV acquisition date search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "error_message": "Assertion failed: \n\nassert layers \u003e 0\n       |      |\n       0      false\n\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure18.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:438)\n\tat ✽.I search for imagery near Paris, France(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "all images should be within the date range specified",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:263"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TLV annotations",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near Lenah Valley, Australia",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a circle annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:88"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a line annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:88"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a point annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:88"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a polygon annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:88"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a rectangle annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:88"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a square annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:88"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the image displays the annotations",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:352"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TLV arrow key controls",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "error_message": "Assertion failed: \n\nassert layers \u003e 0\n       |      |\n       0      false\n\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure18.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:438)\n\tat ✽.I search for imagery near Paris, France(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:54)\n",
  "status": "failed"
});
formatter.step({
  "name": "I can use the arrow keys to cycle through the stack",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:277"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TLV delete key control",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "error_message": "Assertion failed: \n\nassert layers \u003e 0\n       |      |\n       0      false\n\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure18.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:438)\n\tat ✽.I search for imagery near Paris, France(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:66)\n",
  "status": "failed"
});
formatter.step({
  "name": "I can use the delete key to remove an image from the stack",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:307"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TLV image adjustments",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "error_message": "Assertion failed: \n\nassert layers \u003e 0\n       |      |\n       0      false\n\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure18.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:438)\n\tat ✽.I search for imagery near Paris, France(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:85)\n",
  "status": "failed"
});
formatter.step({
  "name": "I adjust the sharpness of a layer",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:167"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I adjust the brightness of a layer",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:167"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I adjust the contrast of a layer",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:167"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the layer\u0027s image pixels change",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:366"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TLV REST API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "endDay\u003d01, endHour\u003d02, endMinute\u003d03, endMonth\u003d04, endSecond\u003d05, endYear\u003d2010, maxCloudCover\u003d50, maxResults\u003d25, minNiirs\u003d6, startDay\u003d07, startHour\u003d08, startMinute\u003d09, startMonth\u003d10, startSecond\u003d11, startYear\u003d2000 are supplied in the TLV URL",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:398"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the search dialog will show a Start Date of 10/07/2000 08:09:11, an End Date of 04/01/2010 02:03:05, a Min. NIIRS of 6, a Max. Cloud Cover of 50, and Max Results of 25",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:380"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TLV search by Decimal Degrees",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near -23.591080, 138.980708",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "error_message": "Assertion failed: \n\nassert layers \u003e 0\n       |      |\n       0      false\n\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure18.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:438)\n\tat ✽.I search for imagery near -23.591080, 138.980708(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:116)\n",
  "status": "failed"
});
formatter.step({
  "name": "I get images that contain -23.591080, 138.980708",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:339"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TLV search by Degrees Minutes Seconds",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near 23° 35\u0027 04.41\" S 138° 59\u0027 57.72\" E",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "error_message": "Assertion failed: \n\nassert layers \u003e 0\n       |      |\n       0      false\n\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure18.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:438)\n\tat ✽.I search for imagery near 23° 35\u0027 04.41\" S 138° 59\u0027 57.72\" E(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:126)\n",
  "status": "failed"
});
formatter.step({
  "name": "I get images that contain -23.584557, 138.999367",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:339"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TLV search by MGRS",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near 55GEN2127254539",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get images that contain -42.861443, 147.260399",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:339"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TLV search by Placename",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "error_message": "Assertion failed: \n\nassert layers \u003e 0\n       |      |\n       0      false\n\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure18.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:438)\n\tat ✽.I search for imagery near Paris, France(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:146)\n",
  "status": "failed"
});
formatter.step({
  "name": "I get images that contain 48.8584, 2.2945",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:339"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TLV summary table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the TLV home page using Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:236"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:405"
});
formatter.result({
  "error_message": "Assertion failed: \n\nassert layers \u003e 0\n       |      |\n       0      false\n\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure18.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:438)\n\tat ✽.I search for imagery near Paris, France(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:158)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the Summary Table button",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:227"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "a table appears with the stack\u0027s metadata",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:257"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Remove browsers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tlv_ui"
    }
  ]
});
formatter.step({
  "name": "I am closing the tlv browsers",
  "keyword": "Given "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:82"
});
formatter.result({
  "status": "passed"
});
});