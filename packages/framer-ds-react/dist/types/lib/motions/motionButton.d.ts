import { TargetAndTransition, VariantLabels } from 'framer-motion';
export declare type ButtonMotion = 'scale' | 'rotate';
export declare type ButtonWhileMotion = {
    whileDrag?: VariantLabels | TargetAndTransition;
    whileHover?: VariantLabels | TargetAndTransition;
    whileTap?: VariantLabels | TargetAndTransition;
    whileFocus?: VariantLabels | TargetAndTransition;
};
export declare const buttonWhileMotion: (buttonMotion: ButtonMotion) => ButtonWhileMotion | undefined;
