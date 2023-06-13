# wanted-pre-onboarding-frontend

## 👨‍💻 지원자
- 한병주

## 💻 프로젝트 실행 방법 (Local)
1. git clone 으로 프로젝트 복사
```
git clone git@github.com:OneMoreBottlee/wanted-pre-onboarding-frontend.git
```
2. 클론한 디렉토리에서 npm 설치
```
npm install
```
3. npm 시작
```
npm start
```

## 🖥 배포 링크
https://ombstodo.netlify.app/

## 📝 과제
<details>
    <summary>접기 / 펼치기</summary>
    
### 1. 로그인 / 회원가입
- [x] /signup 경로에 회원가입 기능 개발
- [x] /signin 경로에 로그인 기능 개발
- [x] 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요
    - [x] 이메일 input에 data-testid="email-input" 속성을 부여해주세요
    - [x] 패스워드 input에 data-testid="password-input" 속성을 부여해주세요
    - [x] 회원가입 페이지에는 회원가입 button에 data-testid="signup-button" 속성을 부여해주세요
    - [x] 로그인 페이지에는 로그인 button에 data-testid="signin-button" 속성을 부여해주세요
- [x] 두 페이지의 UI는 동일해도 무방합니다
- [x] 회원가입과 로그인 페이지의 버튼에 부여되는 test-id가 다른 것에 유의해주세요

Assignment 1
- [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
    - 이메일 조건: @ 포함  
    - 비밀번호 조건: 8자 이상
    - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위, 비밀번호 확인 조건을 추가하는 행위 등은 지양해주세요)
- [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요
- [x] 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

Assignment 2
- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

Assignment 3
- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요
    - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
    - [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

Assignment 4
- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
    - [x] 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
    - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo 페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요

### 2. TODO LIST
Assignment 5
- [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- [x] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- [x] TODO는 `<li>` tag를 이용해 감싸주세요

```
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li>
```

Assignment 6
- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- [x] TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여해주세요
- [x] TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여해주세요
```
<input data-testid="new-todo-input" />
<button data-testid="new-todo-add-button">추가</button>
```
- [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- [x] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

Assignment 7
- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

Assignment 8
- [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- [x] 수정 버튼에는 data-testid="modify-button" 속성을 부여해주세요
- [x] 삭제 버튼에는 data-testid="delete-button" 속성을 부여해주세요

```
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
  <button data-testid="modify-button">수정</button>
  <button data-testid="delete-button">삭제</button>
</li>
```

Assignment 9
- [x] 투두 리스트의 삭제 기능을 구현해주세요
- [x] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

Assignment 10
- [x] 투두 리스트의 수정 기능을 구현해주세요
    - [x] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
    - [x] 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
    - [x] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
        - [x] 수정 input창에는 data-testid="modify-input" 속성을 부여해주세요
    - [x] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
        - [x] 제출버튼에는 data-testid="submit-button" 속성을 부여해주세요
        - [x] 취소버튼에는 data-testid="cancel-button" 속성을 부여해주세요
    - [x] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
    - [x] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

```
<input data-testid="modify-input" />
<button data-testid="submit-button">제출</button>
<button data-testid="cancel-button">취소</button>
```

</details>

## ✍ Issue
<details>
<summary>1. Styled-Components</summary>
    
### 상황
로직을 완성하고, 디자인 작업을 위해 평소 사용하던 스타일드 컴포넌트를 설치하는 과정에서 에러가 발생했다.
    
```
npm ERR! Cannot read properties of null (reading 'edgesOut')
```
    
### 해결
styled-components 깃허브의 issue에서 원인을 파악했다.  
최근 (230508) 릴리스된 새로운 버전에서 발생하는 문제일 수 있다는 내용이었다.  
최신 버전 대신 안정적인 버전을 설치해 에러를 해결했다.
    
</details>

<details>
<summary>2. svg import in TS</summary>
    
### 상황
메인 화면에 원티드 로고를 삽입하기 위해 범용성이 높은 svg 파일을 사용했다.  
애니메이션으로 로고 디자인 해보려는 이유와 사용해보지 않은 파일 형식에 시도하는 마음에서였다.  
(시간 여유가 생기면 애니메이션 추가 예정)  
    
평소 사용하던 png 와 같이 파일을 추가하고, 경로를 import 했는데 이게 왠걸 ?
    
```
type 'typeof import("*.svg")' is not assignable to type 'string'.ts(2322)
```
    
에러가 발생했다.
    
### 해결
Type Script에서 svg 파일에 대한 타입을 찾을 수 없다는 이유였다.
별도의 d.ts 파일을 생성해 svg 파일에 대한 타입을 지정하고, tsconfig.json 파일에서 webpack 설정을 추가해 에러를 해결했다.
    
custom.d.ts
```
declare module "*.svg" {
    const content: any;
    export default content;
}
```
    
tsconfig.json
```
...
"include": ["src", "src/custom.d.ts"]
```
    
</details>

<details>
<summary>3. 배포 후 새로고침시 404 오류 발생</summary>

### 상황
netlify로 배포 후 /signin 이나 /signup, /todo 페이지 새로고침을 하면 404 오류가 발생했다.  

spa 방식의 리액트는 index.html 파일 하나로 렌더링한다.  
브라우저는 서버로부터 index.html 로 렌더링한 페이지 위에 여러 컴포넌트를 렌더링하게 된다.
따라서 브라우저를 통해 /signin 이나 /todo 와 같은 url 요청이 서버에 전송되면 서버는 나한테 없는데 어쩌라고를 외치며 404 오류를 리턴한다.  
그러므로 서버에 url 요청이 오면 a를 보내줘 ! 와 같은 규칙을 정해 알려줘야 한다.  

### 해결
내가 배포한 netlify 에서는 _redirects 파일을 배포 디렉토리에 추가하면 리다이렉트 설정이 된다고 공식문서에 해결 방법을 제시한다.
https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file

public 폴더에 _redirects 파일을 만들고 redirect를 원하는 url을 추가하면, 해당 url에 접속할때 발생하는 404 오류가 사라진다.

</details>
