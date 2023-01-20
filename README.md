# 포켓몬 도감 server

- Client 에서 Request 를 보내면
- Controller 가 REST 를 받음
- 이후, Service 에서 로직이 처리되며 필요하면 외부 api 를 쏨
- Repository 여기서 DB 컬럼 type 정의 => DB
- 정리 : controller => service => Repository => db

## module, controller, service 생성

```bash
nest g module todo
nest g controller todo
nest g service todo
```

## controller 작성

## service 작성

## middleware 작성
