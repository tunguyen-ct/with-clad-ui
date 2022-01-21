export default ShapeIcon;
/**
 * This component allows icons to have background and decorated shape
 *
 * `🧪Beta`
 *
 * @example:
 *
 * ```jsx
 * <ShapeIcon radius="circle" bg="positive" color="white"><SvgHeart /><ShapeIcon>
 * ```
 */
declare function ShapeIcon(props: any): JSX.Element;
declare namespace ShapeIcon {
    namespace propTypes {
        const as: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        const size: PropTypes.Requireable<string>;
        const radius: PropTypes.Requireable<string>;
        const bg: PropTypes.Requireable<string>;
        const color: PropTypes.Requireable<string>;
        const children: PropTypes.Validator<string | PropTypes.ReactElementLike>;
    }
    namespace defaultProps {
        const as_1: string;
        export { as_1 as as };
        const bg_1: string;
        export { bg_1 as bg };
        const color_1: string;
        export { color_1 as color };
        const radius_1: number;
        export { radius_1 as radius };
        const size_1: number;
        export { size_1 as size };
    }
}
import PropTypes from "prop-types";
