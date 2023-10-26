# ☀️오늘 당신의 날씨는?

> '오늘 당신의 날씨는?'은 **오늘 하루 자신의 기분과 감정을 기록**하는 React + TypeScript 프로젝트입니다.

### [오늘 당신의 날씨는 체험하러가기](https://mydiary-29173.web.app/)
```
테스트 계정
아이디: test@naver.com
비밀번호: 123456
```
![제목을-입력해주세요_-001](https://github.com/ShinEun9/myDiary-project/assets/75666099/f1baf866-83b5-45d1-8b5c-e8f116c66452)
<br/>

## 목차
- [프로젝트 배경 및 목적](#-프로젝트-배경-및-목적) 
- [주요기능](#-주요기능) 
- [개발기간](#%EF%B8%8F-개발기간) 
- [기술스택](#%EF%B8%8F-기술-스택) 
- [기타정보](#ℹ%EF%B8%8F-기타-정보) 
     - 코딩컨벤션, 프로젝트 핵심코드, 트러블슈팅, 웹접근성 개선과정, 프로젝트 칸반보드
       
<br/>

## 💻 프로젝트 배경 및 목적
우리의 일상은 다양한 감정과 기분으로 가득하며, 이러한 감정은 우리의 행동과 생활에 큰 영향을 미칩니다. 하지만, 이러한 감정과 기분을 자세히 관찰하고 기록하는 것은 종종 간과되는 일입니다. 감정과 기분을 무시하거나 잊어버릴 때, 우리는 개인적인 성장과 복잡한 감정 상태를 이해하는 기회를 놓치게 될 수 있습니다.

이 프로젝트는 감정과 기분을 주관적으로 관찰하고 기록하는 것을 즐길 수 있도록 하기 위해 시작되었습니다.
</br>

## 📌 주요기능

### 1. 로그인 페이지 / 회원가입 페이지

| 로그인 페이지                                                             | 회원가입 페이지                                                          |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![ezgif-5-eda5f6efcb](https://github.com/ShinEun9/myDiary-project/assets/75666099/86176d5a-9408-4a0f-a8bb-1724d26ce836) | ![ezgif-5-67ba53508d](https://github.com/ShinEun9/myDiary-project/assets/75666099/519b96a4-6506-45e6-9652-fdfc9f591f93) |

<br>

### 2. 일기 페이지

| 일기작성                                                                 | 일기수정                                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| ![ezgif-5-1b8f0174c6](https://github.com/ShinEun9/myDiary-project/assets/75666099/65922048-61ae-4a25-9e24-37db55a7e124) | ![ezgif-5-d684076cbc](https://github.com/ShinEun9/myDiary-project/assets/75666099/42e3b923-dcf6-4811-a718-9ed8a7c2fec3) |

| 일기삭제                                                                 | 로그아웃                                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
|![ezgif-5-aeb271ea25](https://github.com/ShinEun9/myDiary-project/assets/75666099/53ff3788-3dea-4958-aafd-abfa0643e830)| ![ezgif-5-3b891d5175](https://github.com/ShinEun9/myDiary-project/assets/75666099/09da7177-1871-43eb-922b-96cdd9369766) |

### 3. 404 페이지

| 404 페이지                                                               |
| ------------------------------------------------------------------------ |
| ![ezgif-5-c663964fc5](https://github.com/ShinEun9/myDiary-project/assets/75666099/38d4e277-c24d-49ef-afd5-14e992f2b01f) |

<br/>

## 📁 프로젝트 폴더 구조
```
☀️ 오늘 당신의 날씨는
│─ .gitignore
│─ .prettierrc   ──────────────────── ⚙️ prettier 설정 파일
│─ .eslintrc     ──────────────────── ⚙️ eslint 설정 파일
├─ 📂 public
│  ├─ favicon.ico
│  └─ index.html
└─ 📂 src
  ├─ 📂 assets  ───────────────────── 아이콘, 이미지 등 정적 리소스
  ├─ 📂 components
  │  ├─ 📂 common ───────────────────── 공통 컴포넌트
  │  ├─ 📂 home ─────────────────────── HomePage에서 사용되는 컴포넌트들과 module.css파일
  │  ├─ 📂 login ────────────────────── LoginPage에서 사용되는 컴포넌트과 module.css파일
  │  ├─ 📂 signup ───────────────────── SignupPage에서 사용되는 컴포넌트과 module.css파일
  │  └─ 📂 layouts ──────────────────── 공통으로 사용되는 레이아웃
  ├─ 📂 pages   ───────────────────── 라우팅이 적용된 페이지들을 모아놓은 폴더
  │   ├─ 📂 login  ───────────────────── LoginPage 컴포넌트와 module.css
	│  	├─ 📂 signup  ──────────────────── SignupPage 컴포넌트와 module.css
  │   └─ 📂 home ─────────────────────── HomePage 컴포넌트와 module.css
	├─ 📂 context
	│	  └─ AuthContext.tsx  ────────────── 로그인 정보(User정보)를 담는 context관련 파일
  ├─ 📂 hooks ─────────────────────── 커스텀 훅 폴더
  │  ├─ useAuthContext.tsx ───────────── 생성한 context를 편히 쓰기 위한 훅
  │  ├─ useCollection.tsx ────────────── FireBase의 collection 정보를 갖고오기 위한 훅
  │  ├─ useFireStore.tsx ─────────────── FireStore를 사용하는 로직 관련 훅 
	│		...
  │  └─ useLogin.tsx ─────────────────── 로그인 시 필요한 로직 관련 훅
  ├─ 📂 typings
  │   ├─ index.tsx  ─────────────────────── props, state관련 타입선언
  │   └─ eventType.tsx  ─────────────────── event 관련 타입선언
  ├─ 📂 utils    ──────────────────── 공통으로 사용되는 유틸 함수 및 상수
  ├─ 📂 firebase
	│	 └─ config.js  ─────────────────── Firebase SDK를 초기화하는 파일(설정정보도 포함)
  ├─ firebase.json ─────────────────── Firebase 호스팅 프로젝트의 설정 파일
  ├─ App.tsx  
  ├─ index.tsx
  ├─ index.css  ────────────────────── 공통으로 사용되는 스타일 정의
	└─ Global.d.ts  ────────────────────── 글로벌 타입 선언 파일 
```
<br/>

## 🗓️ 개발기간
| 주차                         |                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **1주차**<br>(9/26 ~ 10/2)   | - 주제 선정, 기술 스택 결정 <br>- Figma 디자인 작업 및 기획, 컨벤션 설정 <br> - 초기 개발 환경 세팅 및 로그인, 회원가입, 홈페이지 UI 구현   |
| **2주차**<br>(10/3 ~ 10/9)   | - 404 페이지 UI 구현 <br> - firebase auth, context api 사용하여 로그인, 회원가입 기능 구현<br>- firestore 사용하여 일기수정, 삭제 기능 구현 |
| **3주차**<br>(10/10 ~ 10/16) | - 일기삭제, 로그아웃 시 뜨는 모달 구현 <br> - 모달과 입력 폼의 웹접근성 개선 <br>- 메타 태그 작성 및 favicon 적용                           |
| **4주차**<br>(10/17 ~ )   | - font 최적화, 코드 스플리팅, 캐시 설정, 이미지 스프라이트 등의 최적화 진행 <br>- 버그 수정 및 코드 리팩토링<br>- README 작성               |

<br/>

## ⚙️ 기술 스택
<table>
     <tr>
       <td align="center">사용 기술</td>
       <td>
         <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
         &nbsp;
         <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
         &nbsp;
         <img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />
         &nbsp;
          <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
       </td>
     </tr>
     <tr>
       <td align="center">IDE</td>
       <td>
         <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white" />
       </td>
     </tr>
     <tr>
       <td align="center">린터</td>
       <td>
         <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
       </td>
     </tr>
     <tr>
       <td align="center">포맷터</td>
       <td>
         <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff" />
       </td>
     </tr>
     <tr>
       <td align="center">디자인툴</td>
       <td>
         <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
       </td>
     </tr>
   <tr>
       <td align="center">백엔드</td>
       <td>
         <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
       </td>
     </tr>
   </table>

<br />

## ℹ️ 기타 정보
- [📖 코딩 컨벤션](https://github.com/ShinEun9/myDiary-project/wiki/%F0%9F%93%96-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)
- [🧑‍💻프로젝트 핵심 코드](https://github.com/ShinEun9/myDiary-project/wiki/%F0%9F%A7%91%E2%80%8D%F0%9F%92%BB%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%95%B5%EC%8B%AC-%EC%BD%94%EB%93%9C)
- [⚠️ 트러블 슈팅](https://github.com/ShinEun9/myDiary-project/wiki/%E2%9A%A0%EF%B8%8F%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85)
- [♿ 웹접근성 개선 과정](https://github.com/ShinEun9/myDiary-project/wiki/%E2%99%BF-%EC%9B%B9%EC%A0%91%EA%B7%BC%EC%84%B1-%EA%B0%9C%EC%84%A0-%EA%B3%BC%EC%A0%95)
- [✅ 프로젝트 칸반보드](https://github.com/users/ShinEun9/projects/3)
