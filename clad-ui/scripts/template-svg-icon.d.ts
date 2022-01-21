export = iconTemplate;
/**
 * Template for SVGR icon
 * CHANGES from default template:
 * - Parse data-type attribute and store icon type to Icon.type static property
 */
declare function iconTemplate({ template }: {
    template: any;
}, opts: any, { imports, interfaces, componentName, props, jsx, exports }: {
    imports: any;
    interfaces: any;
    componentName: any;
    props: any;
    jsx: any;
    exports: any;
}): any;
