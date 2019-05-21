/*
 * This Groovy source file was generated by the Gradle 'init' task.
 */
package omar.cucumber.frontend.test

class Application {

    static void main(String[] args) {

        if (System.getenv("runEnv") == "local")
        {
            CucumberTest frontend = new CucumberTest()
            frontend.startTest()
        } else {
            TomcatStart tomcat = new TomcatStart()
            tomcat.startServer()
        }
    }
}