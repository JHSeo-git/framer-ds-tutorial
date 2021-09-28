import { ElementType } from 'react';
export declare type AsMotionBox = 'div' | 'ul' | 'li' | 'nav' | 'a';
export declare const motionBoxAsComponent: (as: ElementType | undefined) => import("framer-motion").ForwardRefComponent<HTMLDivElement, import("framer-motion").HTMLMotionProps<"div">> | import("framer-motion").ForwardRefComponent<HTMLLIElement, import("framer-motion").HTMLMotionProps<"li">> | import("framer-motion").ForwardRefComponent<HTMLAnchorElement, import("framer-motion").HTMLMotionProps<"a">>;
