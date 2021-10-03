# d.ts module alias path resolve

d.ts 파일 내 module alias path가 resolve 되지 않는데 아래 방법을 이용해 resolve 할 수 있음

- https://github.com/LeDDGroup/typescript-transform-paths
- https://github.com/nonara/ts-patch

# 동기

## Process(계속해서 바뀔 예정, 왜냐 뇌피셜로 진행중이기 때문)

1. (디자인이 되어있다는 가정하에) 리액트 컴포넌트를 우선 만든다.
2. 프레이머 빈 프로젝트를 만든다.
3. 프로젝트를 template으로 저장하여(.framerfx) 해당 프로젝트에 component-importer를 이용해 프레이머 전용 리액트 컴포넌트를 만든다.
4. publish

### 추론

어떻게 쓸까? 어떻게 하면 합리적일까? 를 생각해봤고.
lighthouse 유투브 영상에서 설명한 내용 위주로 추론을 해봄.

1. [디자이너] 컴포넌트를 디자인툴(이 때는 Figma든 뭐든 상관없다, 주로 Figma를 많이 쓰니 Figma로 생각함) 디자인 한다.
2. [개발자] 디자인에 기반해서 리액트 컴포넌트를 만든다.
3. [ANY] 프레이머에 빈 프로젝트를 만든다.
4. [ANY] save as template을 통해 .framerfx 라는 노드 프로젝트를 저장한다.
5. [개발자] component-importer를 통해 리액트로 만든 컴포넌트를 .framerfx 프로젝트 하위에 자동 생성한다.
6. [개발자] .framerfx 프로젝트를 프레이머 프로젝트로 publish 한다.
7. [ALL] 확인

여기까지 1회분. 영상에서는 초기 1회분 진행 시에 3회분을 예상했다고 나와있으나
실제로는 몇회분을 진행했는지는 모름.

제일 의문인건 만약 컴포넌트가 수정되어야 하거나 추가되어야 할 경우 1번 부터 진행하는가?
아니면 다른 유연한 프로세스가 존재하는가?
(가령 프레이머에서 제작하고 리액트 컴포넌트로 export 할 수 있다던지)

# 이슈

## stitches styled 스타일에서 컴포넌트 selector 이용 시 className 변경 이슈

`[& ${Text}]` 와 같은 컴포넌트 selector를 사용할 때 ssr 시
client class와 server class가 달라지는 문제가 발생함

이유가 뭔지 모르겠네...

뭔가 re generate 되는 거 같은데

- forwardRef를 안해서?

일단 사용안하는 방식으로 구현하고 조금 더 확인해봐야 할듯...
