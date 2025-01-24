# Gradle Build Stage
FROM gradle:7.6-jdk17-alpine AS build

# 1) root 권한으로 진입, Gradle 캐시 디렉터리 생성 및 소유자 변경
USER root
RUN mkdir -p /home/gradle/.gradle && chown -R gradle:gradle /home/gradle

# 2) 다시 gradle 사용자로 전환
USER gradle

WORKDIR /home/gradle/app

# 3) 소스 코드 복사 및 빌드
COPY --chown=gradle:gradle . .
RUN gradle clean build --no-daemon --stacktrace --info

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
