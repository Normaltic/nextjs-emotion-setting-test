# Nextjs 에서 emotion 설정 연습

버전

- Next.js@15.2.4
- @emotion/react@11.14.0
- @emotion/styled@11.14.0

## 공통

`next.config.ts`의 `compiler`옵션에서 `@emotion/babel-plugin과` 관련 설정 가능

[Nextjs - compiler/emotion](https://nextjs.org/docs/architecture/nextjs-compiler#emotion)

## Page Router

`_document.tsx`에서 `Document`를 확장해서 설정

스트리밍 API에서 작동하지 않음

버전

- @emotion/cache@11.14.0
- @emotion/server@11.11.0

참고

- [Implementing Next.js Emotions in Your Project](https://www.dhiwise.com/post/implementing-nextjs-emotions-in-your-project)
- [emotion/SSR - Advanced Approach](http://emotion.sh/docs/ssr#advanced-approach)
- [Nextjs/Custom Document](https://nextjs.org/docs/pages/building-your-application/routing/custom-document)

## App Router

tss-react의 `NextAppDirEmotionCacheProvider`를 `layout.tsx`에 적용해서 설정

스타일 컴포넌트 선언 파일 대상 `"use client"` 명시 필요

버전

- tss-react@4.9.16

참고

- [Make it easyer to integrate with Next.js](https://github.com/emotion-js/emotion/issues/3054)
- [tss-react/Next.js - Single emotion cache](https://docs.tss-react.dev/ssr/next.js#single-emotion-cache-recommended-approach)
- [Nextjs/Styling - Configuring CSS-in-JS in app](https://nextjs.org/docs/app/building-your-application/styling/css-in-js#configuring-css-in-js-in-app)
