import { MediaQuery } from './shared/mediaQuery';
import { Typography } from './shared/typography';
import { ZIndices } from '@src/tokens/zIndices';
import { Radii } from '@src/tokens/radii';
import { Space } from '@src/tokens/space';
import { Sizes } from '@src/tokens/sizes';
/**
 * Color Theme 요소 타입 정의
 * ------------------------------------------------------
 */
declare type SemanticColors = {
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTeritary: string;
    backgroundInversePrimary: string;
    backgroundInverseSecondary: string;
    backgroundInverseTeritary: string;
    foregroundPrimary: string;
    foregroundSecondary: string;
    foregroundTeritary: string;
    foregroundInversePrimary: string;
    foregroundInverseSecondary: string;
    foregroundInverseTeritary: string;
};
/**
 * Stitches 용 Color 타입 정의
 * ------------------------------------------------------
 */
declare type StitchesFoundationColors = {
    transparent: string;
    current: string;
    white: string;
    black: string;
    primary1: string;
    primary2: string;
    primary3: string;
    primary4: string;
    primary5: string;
    primary6: string;
    primary7: string;
    primary8: string;
    primary9: string;
    primary10: string;
    primary11: string;
    primary12: string;
    secondary1: string;
    secondary2: string;
    secondary3: string;
    secondary4: string;
    secondary5: string;
    secondary6: string;
    secondary7: string;
    secondary8: string;
    secondary9: string;
    secondary10: string;
    secondary11: string;
    secondary12: string;
    teritary1: string;
    teritary2: string;
    teritary3: string;
    teritary4: string;
    teritary5: string;
    teritary6: string;
    teritary7: string;
    teritary8: string;
    teritary9: string;
    teritary10: string;
    teritary11: string;
    teritary12: string;
    mono1: string;
    mono2: string;
    mono3: string;
    mono4: string;
    mono5: string;
    mono6: string;
    mono7: string;
    mono8: string;
    mono9: string;
    mono10: string;
    mono11: string;
    mono12: string;
    success1: string;
    success2: string;
    success3: string;
    success4: string;
    success5: string;
    success6: string;
    success7: string;
    success8: string;
    success9: string;
    success10: string;
    success11: string;
    success12: string;
    warning1: string;
    warning2: string;
    warning3: string;
    warning4: string;
    warning5: string;
    warning6: string;
    warning7: string;
    warning8: string;
    warning9: string;
    warning10: string;
    warning11: string;
    warning12: string;
    error1: string;
    error2: string;
    error3: string;
    error4: string;
    error5: string;
    error6: string;
    error7: string;
    error8: string;
    error9: string;
    error10: string;
    error11: string;
    error12: string;
};
export declare type StitchesColors = StitchesFoundationColors & SemanticColors;
/**
 * Theme 타입 정의
 * ------------------------------------------------------
 */
export declare type Theme = {
    colors: StitchesColors;
    mediaQuery: MediaQuery;
    typography: Typography;
    zIndices: ZIndices;
    radii: Radii;
    space: Space;
    sizes: Sizes;
};
export {};
