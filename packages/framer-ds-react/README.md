# React components - Framer Design System Tutorial

프레이머를 이용한 디자인 시스템 리액트 컴포넌트

# 구성 요소

- tokens
- themes
- stitches
- components

tokens >= shared > themes > stitches > components

## tokens

스타일 기초가 되는 token을 등록하여 사용가능하다.
별도 기준이 존재하지는 않지만 최소한으로 쪼갤 수 있는 범위까지 쪼개어 관리한다.

- colorPalette
- typoPalette
- sizes
- space
- zIndices
- breakpoints
- radii

## shared

token을 이용한 shared을 구성하여 사용가능하다.
또한, shared는 themes의 공통 구성요소로 사용된다.

stitches theme token을 참고하였으며 14개 중 color를 제외한 13개를 공통으로 사용하도록 한다.

- mediaQuery
- typography
- sizes
- spaces
- zIndices
- radii

## themes

token + shared로 구성되며 light, dark 2개 themes을 다룬다.
theme 종류에 대한 차이는 현재 색깔 차이 밖에 없다.

- light
- theme

## components

재사용가능한 모든 컴포넌트를 대상으로 한다.

- `./src/components`

1. Accordion
2. Alert
3. AlertDialog
4. AppBar
5. Avatar
6. Badge
7. Banner
8. Box
9. Button
10. Card
11. Checkbox
12. Code
13. Container
14. ContextMenu
15. ControlGroup
16. Dialog
17. DropdownMenu
18. Flex
19. Grid
20. Heading
21. IconButton
22. Image
23. Kbd
24. Label
25. Link
26. Menu
27. Overlay
28. Panel
29. Paragraph
30. Popover
31. ProgressBar
32. Radio
33. RadioCard
34. RadioGrid
35. Scrollbar
36. Section
37. Select
38. Separator
39. Sheet
40. SimpleToggle
41. Skeleton
42. Slider
43. Status
44. Sub
45. Sup
46. Switch
47. TabLink
48. Table
49. Tabs
50. Text
51. TextArea
52. TextField
53. Tooltip
54. TreeItem
55. VerifiedBadge

## 작업 우선순위

큰 컴포넌트 -> 작은 컴포넌트 위주로 진행한다.

# 디자인 형상관리

> 예전에 storybook plugin 중 하나였던거 같은데 github과 연계시켜서 렌더링 된 디자인 기준으로 테스트 결과를 알려주고 화면에 표시해주는 그런게 있었던 것 같다.

# Rule

- 모바일 퍼스트.
- 디자인 퍼스트.
- 컴포넌트 재사용성 높임.
- 모든 디자인, 컴포넌트 수정, 추가에 대한 히스토리는 반드시 문서로 남겨둔다.
- 컴포넌트 스타일에 대한 Props은 Variants와 동일하게 하며 Variatns에 속하지 않는 Props는 다루지 않는다.
- 컴포넌트 스타일 오버라이딩이 가능하지만 최소한으로 사용한다.

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
