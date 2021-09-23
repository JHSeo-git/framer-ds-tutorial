import React, { ElementType } from 'react';
import { Text } from '../Text';
declare const DEFAULT_TAG = "h1";
declare type TextProps = React.ComponentProps<typeof Text>;
declare type HeadingSizeVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
declare type HeadingVariants = {
    size?: HeadingSizeVariants;
} & Omit<TextProps, 'size'>;
declare type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> & HeadingVariants & {
    as?: ElementType;
};
declare const Heading: React.ForwardRefExoticComponent<Pick<HeadingProps, "size" | "as" | "css" | "key" | keyof React.HTMLAttributes<HTMLHeadingElement> | "gradient"> & React.RefAttributes<HTMLHeadingElement>>;
export default Heading;
