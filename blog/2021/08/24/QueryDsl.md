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



## 동적 쿼리 작성방법

> 1. Specification
>
> 2. QueryDSL



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

(예제) Member 테이블에서 이름이 "홍길동"인 항목 조회

```java
QMember qMember = QMember.member;

List<Member> members = queryFactory.select(qMember)
                 .from(qMember)
                 .where(qMember.name.eq("홍길동"))
                 .fetch();
```



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
                 .where(qMember.name.eq("홍길동"))
                 .fetch();
```

