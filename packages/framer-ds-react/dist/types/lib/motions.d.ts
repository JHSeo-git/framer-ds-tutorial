import { TargetAndTransition, VariantLabels } from 'framer-motion';
import { ElementType } from 'react';
export declare type ButtonMotion = 'scale' | 'rotate';
export declare type ButtonWhileMotion = {
    whileDrag?: VariantLabels | TargetAndTransition;
    whileHover?: VariantLabels | TargetAndTransition;
    whileTap?: VariantLabels | TargetAndTransition;
    whileFocus?: VariantLabels | TargetAndTransition;
};
export declare const buttonWhileMotion: (buttonMotion: ButtonMotion) => ButtonWhileMotion | undefined;
export declare type AsMotionBox = 'div' | 'ul' | 'li' | 'nav' | 'a';
export declare const motionBoxAsComponent: (as: ElementType | undefined) => import("framer-motion").ForwardRefComponent<HTMLUListElement, import("framer-motion").HTMLMotionProps<"ul">> | import("framer-motion").ForwardRefComponent<HTMLLIElement, import("framer-motion").HTMLMotionProps<"li">> | import("framer-motion").ForwardRefComponent<HTMLAnchorElement, import("framer-motion").HTMLMotionProps<"a">>;
