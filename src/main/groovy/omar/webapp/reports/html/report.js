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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:53"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:842)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure1.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:67)\n\tat ✽.I am creating the tlv browsers(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:14)\n",
  "status": "failed"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "all images should be within the date range specified",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:261"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:34)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near Lenah Valley, Australia",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add a circle annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:86"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add a line annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:86"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add a point annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:86"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add a polygon annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:86"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add a rectangle annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:86"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add a square annotation",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:86"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the image displays the annotations",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:350"
});
formatter.result({
  "status": "skipped"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:53)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can use the arrow keys to cycle through the stack",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:275"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:65)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can use the delete key to remove an image from the stack",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:305"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:84)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I adjust the sharpness of a layer",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:165"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I adjust the brightness of a layer",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:165"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I adjust the contrast of a layer",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:165"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the layer\u0027s image pixels change",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:364"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:103)\n",
  "status": "failed"
});
formatter.step({
  "name": "endDay\u003d01, endHour\u003d02, endMinute\u003d03, endMonth\u003d04, endSecond\u003d05, endYear\u003d2010, maxCloudCover\u003d50, maxResults\u003d25, minNiirs\u003d6, startDay\u003d07, startHour\u003d08, startMinute\u003d09, startMonth\u003d10, startSecond\u003d11, startYear\u003d2000 are supplied in the TLV URL",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:396"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the search dialog will show a Start Date of 10/07/2000 08:09:11, an End Date of 04/01/2010 02:03:05, a Min. NIIRS of 6, a Max. Cloud Cover of 50, and Max Results of 25",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:378"
});
formatter.result({
  "status": "skipped"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:115)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near -23.591080, 138.980708",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I get images that contain -23.591080, 138.980708",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:337"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:125)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near 23° 35\u0027 04.41\" S 138° 59\u0027 57.72\" E",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I get images that contain -23.584557, 138.999367",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:337"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:135)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near 55GEN2127254539",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I get images that contain -42.861443, 147.260399",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:337"
});
formatter.result({
  "status": "skipped"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:145)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I get images that contain 48.8584, 2.2945",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:337"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:234"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure6.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:248)\n\tat ✽.that I am starting at the TLV home page using Firefox(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:157)\n",
  "status": "failed"
});
formatter.step({
  "name": "I search for imagery near Paris, France",
  "keyword": "When "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:403"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Summary Table button",
  "keyword": "And "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:225"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "a table appears with the stack\u0027s metadata",
  "keyword": "Then "
});
formatter.match({
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:255"
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
  "location": "Time_Lapse_Viewer_UI_StepDef.groovy:80"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method quit() on null object\n\tat omar.cucumber.step_definitions.Time_Lapse_Viewer_UI_StepDef$_run_closure2.doCall(Time_Lapse_Viewer_UI_StepDef.groovy:83)\n\tat ✽.I am closing the tlv browsers(file:src/main/resources/features/01_Time_Lapse_Viewer_UI.feature:163)\n",
  "status": "failed"
});
formatter.uri("file:src/main/resources/features/02_Image_Search_UI.feature");
formatter.feature({
  "name": "O2MapUserInterface",
  "description": "  As an analyst I need to be able to discover imagery in a user interface to choose for analysis",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@o2_ui_search"
    }
  ]
});
formatter.scenario({
  "name": "[MAP-01] UI Map Search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@o2_ui_search"
    }
  ]
});
formatter.step({
  "name": "that I am starting at the O2 Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Image_Search_UI_StepDef.groovy:46"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method go() on null object\n\tat omar.cucumber.step_definitions.Image_Search_UI_StepDef$_run_closure1.doCall(Image_Search_UI_StepDef.groovy:47)\n\tat ✽.that I am starting at the O2 Home page(file:src/main/resources/features/02_Image_Search_UI.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "the Map button is clicked",
  "keyword": "When "
});
formatter.match({
  "location": "Image_Search_UI_StepDef.groovy:62"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the Search page is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "Image_Search_UI_StepDef.groovy:52"
});
formatter.result({
  "status": "skipped"
});
});