export default Breadcrumbs;
declare function Breadcrumbs({ className, children, isShow }: {
    className: any;
    children: any;
    isShow: any;
}): JSX.Element;
declare namespace Breadcrumbs {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const children: PropTypes.Validator<PropTypes.ReactElementLike | PropTypes.ReactElementLike[]>;
        const isShow: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        const isShow_1: boolean;
        export { isShow_1 as isShow };
    }
}
import PropTypes from "prop-types";
