FROM openjdk:17-jdk-alpine

VOLUME /tmp

#install maven
#RUN apk add --no-cache maven

# Set the working directory
WORKDIR /app

# Copy the pom.xml file
COPY pom.xml .

# Build the dependencies
#RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY . .

# Build the application
#RUN mvn clean package

# Expose the port on which the application runs
EXPOSE 8080

# Start the application
#CMD ["java", "-jar", "target/spring-app.jar"]

ADD target/fullstacktest-0.0.1-SNAPSHOT.jar /app/app.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=container", "-jar", "/app/app.jar"]
