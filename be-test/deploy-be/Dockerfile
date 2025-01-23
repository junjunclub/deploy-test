# Dockerfile
FROM openjdk:17-jdk-alpine

WORKDIR /app

# 빌드된 JAR 파일 경로를 지정 (Gradle 빌드 아웃풋 기준)
ARG JAR_FILE=build/libs/*.jar

# JAR 파일을 컨테이너로 복사
COPY ${JAR_FILE} app.jar

# 애플리케이션에서 사용하는 포트를 공개
EXPOSE 8081

# 애플리케이션 실행 명령
ENTRYPOINT ["java", "-Duser.timezone=Asia/Seoul", "-jar", "app.jar"]
