##openjdk is the docker image for Java JDK the application will use
#FROM openjdk
##creating a working directory inside the docker container of the application
#WORKDIR usr/lib
##Copy the executable jar file that is created
##in the target folder and add it to the usr/lib working directory
#ADD ./target/demo-0.0.1-SNAPSHOT.jar /usr/lib/authenticationservice-2.7.3.jar
##Run the jar file using t
#he java -jar command
#ENTRYPOINT ["java","-jar","demo-0.0.1-SNAPSHOT.jar"]

FROM ubuntu:latest
FROM openjdk

LABEL authors="Pavithra"

COPY target/*.jar /book-service.jar

EXPOSE 5555

ENTRYPOINT ["java", "-jar", "/book-service.jar"]