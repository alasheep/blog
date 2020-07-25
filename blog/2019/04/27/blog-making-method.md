---
slug: blog-making-method
title: 블로그 개설 후기
date: 2019-04-27T12:00:00.000Z
published: true
excerpt: 블로그를 만들었습니다. 뭔가 동기 부여가 필요하던 차에 회사 교육을 받던 중 갑자기 Feel 이 와서 하루 투자해서 만들었네요.
author: Andy
tags: 
 - blog
cover: ./pexels-photo-169573-1024x683.jpeg
---

블로그를 만들었습니다.

뭔가 동기 부여가 필요하던 차에 회사 교육을 받던 중 갑자기 Feel 이 와서 하루 투자해서 만들었네요.

저에게 맞는 블로그를 만들어 가면서 Vue.js 활용도 하고, 소통도 하고 살려고 합니다.

다음은 블로그를 만든 방법입니다.



## 참고 소스

사실 교육을 받으면서 배운 Vue.js 를 활용할 방법이 
뭐 있을까 해서고민하다가 문득 블로그를 만들면 어떨까 해서 
찾은 소스가 1의 참고 소스 입니다. 이분 소스를 보니, 
배운 Vue.js 를 활용해서 내게 맞는 블로그를 만들어 가는게 가능하겠지 싶어
소스를 받아서 제 블로그 소스로 사용하였습니다.

참고사이트 (https://github.com/danvega/danvega-dev) 통해 git clone

```
git clone https://github.com/danvega/danvega-dev.git
```

Gridsome 빌드

Gridsome 은 Vue.js 기반의 site generator 입니다.
참고 소스는 Gridsome 으로 작성된 Vue.js 소스로 빌드 방식은 다음과 같습니다.

```
npm install --global @gridsome/cli
```

```
npm install
```

```
gridsome develop
```

로컬 브라우저에서 확인

```
http://localhost:8080
```



## Github Commit & Push

앞으로 소스를 손보면서 발전시켜 나갈 예정이라 github 올립니다.

```
git init</br>
git add .</br>
git commit -m "first blog code by vue.js"</br>
git remote add origin http://github.com/alasheep/blog.git
```



## Netlify 통한 배포 및 호스팅

기왕에 만든 블로그 실제 배포를 하고 싶은 욕심이 생겨,
Netlify 사이트 가입 후 github 의 git 을 연동해서 배포 하였습니다.
정적사이트 무료 배포용으로 많이들 사용하셔서 저도 따라 해봤습니다.

Netlify 배포 및 호스팅 방법 : https://heropy.blog/2018/01/10/netlify/

위 처럼 배포를 하니, 다음 사이트 주소를 사용할 수 있었습니다. (와, 브라우저에서 보임 ^^)

```
admiring-sammet-8c523b.netlify.com
```



## 개인 도메인과 연결

좀더 욕심을 부려, 개인 도메인 (alasheep.com) 구매해서 연결했네요.
[GoDaddy](https://kr.godaddy.com) 에서 1년에 1만원 밖에 하지 않습니다. ㅎㅎ

주의사항은 Netlify 의 네임서버 주소를 GoDaddy 에서 구매한 도메인 설정의 네임서버에 등록 하여야 합니다.



## 짠~ 내 블로그

