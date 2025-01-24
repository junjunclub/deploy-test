# Gradle Build Stage
FROM gradle:7.5.1-jdk17-alpine AS build
WORKDIR /home/gradle/app
COPY --chown=gradle:gradle . .
RUN gradle build --no-daemon

# Application Stage
FROM openjdk:17-jdk-alpine
WORKDIR /app

# Timezone 환경 변수 설정
ENV TZ=Asia/Seoul

# 빌드된 JAR 파일 복사
COPY --from=build /home/gradle/app/build/libs/*.jar app.jar

# 애플리케이션 포트 노출
EXPOSE 8081

# 애플리케이션 실행
ENTRYPOINT ["java", "-jar", "app.jar"]
