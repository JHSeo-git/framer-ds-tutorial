# Documentation - Framer Design System Tutorial

프레이머를 이용한 디자인 시스템 스타일 메뉴얼
(https://framer-ds-site.vercel.app/)

# yarn monorepo add link local package

사전에 package.json에 name은 적당히 맞춰놓고 version 명시해서 yarn add 해주면 된다.

# markdown basic syntax

- https://www.markdownguide.org/basic-syntax/

# mdx-bundler plugin

remark: markdown parsing plugin
rehype: html parsing plugin

markdown파일에 plugin을 적용하기 위해선 remark plugin을 사용해야 하며
markdown파일에 rehype plugin을 적용하기 위해선 markdown을 html로 변환된 뒤에 적용 가능하다.

- remark-slug: add id at markdown's heading element
- rehype-meta-attribute: using markdown code block metadata
