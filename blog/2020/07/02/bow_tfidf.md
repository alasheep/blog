---
slug: bow_tfidf
title: "AI학습(bow&tf-idf)"
published: true
date: 2020-07-02T21:00
tags: Random
excerpt: "BOW 와 TF-IDF"
cover: ./bow_tfidf_cover.jpeg
---

## NLP란?

Natural Language Processing (NLP) 로,

기계가 사람의 언어를 듣고, 말하고, 읽고, 쓰는것을 가능케 하는 AI 기술분야

> 개떡같이 말해도 찰떡같이 알아 들어야 진정한 AI



## BOW (Bag-of-words)

> 단어는 어떻게 숫자로 표현될 수 있나?

#### 1. 아는 단어의 명단(Vocabulary)을 만든다.

![vocabulary](/Users/alasheep/dev/vue/blog/blog/2020/07/02/vocabulary.png)

#### 2. 벡터 변환 (one hot vector)

![onehotvector](/Users/alasheep/dev/vue/blog/blog/2020/07/02/onehotvector.png)

#### 3. 여러개의 단어 vector 를 합하여 문장으로 표현 (bag-of-words, BOW vector)

![bow_vector](/Users/alasheep/dev/vue/blog/blog/2020/07/02/bow_vector.png)

#### 4. BoW vector : Nx1 매트릭스에 vocabulary 단어 빈도수 표시

![bow_representation](/Users/alasheep/dev/vue/blog/blog/2020/07/02/bow_representation.jpeg)



#### 5. Bow vector with python

