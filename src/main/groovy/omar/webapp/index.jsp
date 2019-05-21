<%@ page import="omar.cucumber.frontend.test.CucumberTest"%>
<html>
<head>
</head>
<body>
<%!
  public void callfrontend() {
    CucumberTest frontend = new CucumberTest();
    frontend.startTest();
  }
%>
<%
  String requestMethod = request.getMethod();
  if(requestMethod.equals("POST")){
    callfrontend();
  }
%>
<form name="frontendTestForm" action="#" method="post">
  <input type="submit" id="frontendTestBtn" value="Run Test">
</form>
</body>
</html>