---
slug: word embedding
title: "Word Embedding"
published: true
date: 2019-07-22T15:00:07-18:00
tags: Random
excerpt: "word embedding"
cover: ./pexels-photo-169573-1024x683.jpeg

---



## King - Man + Woman

> 단어간의 관계가 Vector 화 되있다면 풀수 있는 문제 



## Word Embedding (word vector)

Distributonal Hyphthesis : 단어는 주변 단어에 의해 결정된다.

> The baby is crawling on the mat



![wordembedding_concept](./wordembedding_concept.png)



One-hot vectors 는 bow 의 단어 frequency 를 숫자로만 표현하여 차원이 엄청 커질수 있고,

단어간의 관계를 벡터화 하지 못하는 반면에,

위 그림처럼 차원을 줄이면서 단어간의 관계를 내포하는 벡터로 표현하면

King - Man + Woman 문제도 풀수 있다.



## Glove

Distributonal Hyphthesis : 단어는 주변 단어에 의해 결정된다.

> The baby is crawling on the mat