# ♻️ Green Seoul Bot 

<div align=center>
  
### 🛠️ Tech Stack 🛠️
![next](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![Type](https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>


### 💡 서비스 개요 
###### ICT콤플렉스 SW개발 공모전(피우다 프로젝트)에 본선진출한 개발물 입니다.
이 챗봇은 재활용품 관련 지원 정책에 특화된 AI 기술로, 시민들이 보다 쉽게 고품질의 분리배출을 실천할 수 있도록 도와줍니다.
각 지역마다 다른 재활용품 수거 품목과 기준, 그리고 보상품 정보를 친절하게 안내하며, 사용자가 이미지를 첨부하면 대형폐기물의 수수료 정보도 간편하게 제공해 드립니다.

누구나 편리하게 이용할 수 있도록, 고대비 모드와 음성인식 기능 같은 다양한 접근성 강화 기술이 적용되어 있습니다. 특히 배리어프리 환경을 고려해 설계했기 때문에 더 많은 사람들이 쉽게 사용할 수 있습니다.

또한, AI 기반의 자연어 처리 기술을 활용해 사용자 질문에 실시간으로 맞춤형 답변을 제공합니다. 앞으로는 전국으로 서비스를 확장하여 지역별로 특화된 폐기물 처리 정보를 제공할 계획이며, 기업이나 환경단체와의 협력을 통해 다양한 재활용 캠페인에도 활용될 예정입니다.

### 💻 개발기간 
2024.10.09 ~ 2024.12.03 (55일)

### 👩🏻‍💻 팀원 
|이름|github|담당|
|------|---|---|
|정다경(팀장)|<https://github.com/Jeong-Dagyeong>|Front-end & UX & UI|
|김지현|<https://github.com/jyun-KIM>|Back-end & AI|
|김채린|<https://github.com/Chai-Lynn>|PM|

### 🗂️ 디렉터리 구조 
<details>
  <summary>
      디렉터리 구조
  </summary>

  ```
📦public
 ┣ 📂fonts
 ┃ ┣ 📜KoddiUDOnGothic-Bold.ttf
 ┃ ┣ 📜KoddiUDOnGothic-ExtraBold.ttf
 ┃ ┗ 📜KoddiUDOnGothic-Regular.ttf
 ┣ 📂images
 ┃ ┣ 📜close.png
 ┃ ┣ 📜picture.png
 ┃ ┣ 📜picture_darkmode.png
 ┃ ┣ 📜recycle-icon.png
 ┃ ┣ 📜switch-on64.png
 ┃ ┗ 📜switch.png
 ┗ 📂styles
 ┃ ┣ 📜chatbot-style.css
 ┃ ┣ 📜darkmode-style.css
 ┃ ┗ 📜enlargemode-style.css

📦src
 ┣ 📂app
 ┃ ┣ 📂create
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂flows
 ┃ ┃ ┣ 📜district-flow.tsx
 ┃ ┃ ┗ 📜upload-file-flow.tsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┗ 📂types
 ┃ ┣ 📜FileList.tsx
 ┃ ┗ 📜Params.tsx
```

</details>

### 📑 API 명세 
|기능|method|URL|
|------|---|---|
|재활용 정책|`post`|`/chatbot/policy`|
|사진 업로드|`post`|`/chatbot/upload`|

### 🎥 Green Seoul Bot 시연 영상 
[시연 영상](<https://youtu.be/NjjlrxQ1qb4?si=l7-dheWBtPiZNkH3>)

### 🎨 Green Seoul Bot 피그마 
[Figma](<https://www.figma.com/design/7dJt5U5QbMwwsBoiVEK5f3/Green-Seoul-Bot?node-id=0-1&t=A2BzgizBRsGz4Dhb-1>)

#### Green Seoul Bot 메인
<img width="1417" alt="스크린샷 2025-01-06 오후 11 24 21" src="https://github.com/user-attachments/assets/6e815104-e384-4d29-b077-285d2b9ac912" />

#### Green Seoul Bot 고대비 모드(다크모드)
<img width="1426" alt="스크린샷 2025-01-06 오후 11 32 45" src="https://github.com/user-attachments/assets/d645502e-a00c-4fb0-8462-3c188d610409" />
