---
slug: QueryDsl
title: Backend - "QueryDsl"
published: true
date: 2021-08-24T11:00:00.000Z
tags:
 - blog
excerpt: 
cover: ./404.png
---



## 쿼리 작성방법

> 1. JPQL
> 2. JpaRepsitory 인터페이스
> 3. Specification
> 4. QueryDSL



## QueryDSL 이란?

> JPQL 빌드
>

참고 사이트 : querydsl.com



## JPQL 조회방식

> 1. JPQL 호출하면 DB 우선 조회 (JPA 는 영속성컨텍스트 우선 조회)
> 2. 조회한 값을 영속성 컨텍스트에 저장 시도
> 3. 저장 시도할때 해당 데이터가 이미 존재하는경우, DB에서 조회한 신규 데이터는 버리고, 영속성 컨텍스트 데이터 리턴



## QueryDSL 사용방법

> QueryDSL 라이브러리가 제공하는 Q클래스 인스턴스로 QueryDSL 문법에 맞게 동적 쿼리 작성

#### 1. QueryFactory 빈 생성

#### 2. Q클래스 생성 : maven or gradle 빌드

#### 3. 코드 작성

(예제) Member 테이블에서 이름이 "홍길동"인 항목 조회

```java
QMember qMember = QMember.member;

List<Member> members = queryFactory.select(qMember)
                 .from(qMember)
                 .where(qMember.username.eq("홍길동"))
                 .fetch();
```



## JPA 내에 QueryDSL 녹이기 

> 기존에 사용하는 JPA 코드에 QueryDSL 적용하기

#### 1. XXXRepositoryCustem 인터페이스 작성 및 구현 클래스 작성

- queryDSL 로 작성된 함수

#### 2. 사용중인 JpaReository 에 XXXRepositoryCustom 인터페이스 구현

- 즉, MemberRepository 는 JpaRepository 도 상속받고, XXXRepositoryCustom 도 상속받아

  JPA 와 QueryDSL 모두를 memberRepsitory 통해 사용가능

  

## QueryDSL 성능개선

> 성능개선 내용

#### 1. Entity 조회 대신 Dto 조회

(예제) Member 테이블에서 이름이 "홍길동"인 항목 조회

```java
QMember qMember = QMember.member;

List<Member> members = queryFactory.select
                        (Projections.fields(MemberDto.class, memebr.username))
                 .from(qMember)
                 .where(qMember.username.eq("홍길동"))
                 .fetch();
```



#### 2. 패티 조인과 페이징 동시사용시 Memeory Leak 이슈

- 현상 : 발생하는 db 쿼리에 limit 없이 쿼리 발생하나, 다음의 에러가 보이면서 페이징 결과는 정상리턴
- 에러 : firstResult/maxResults specified with collection fetch; applying in memory

- 원인 : 전체 조회를 해서 메모리에 올리고, 그중 페이징에 해당하는 결과만 리턴하여 결과 조회는 이상없어 보이나 잠재적인 메모리 Leak 문제를 가지고 있음
- 대책 : 확인중



## 로그팁

> QueryDSL 은 JPQL 빌더이기 때문에 db 쿼리 말고도, JPQL 쿼리도 확인 필요함
>
> hibernate.use_sql_comments=true

