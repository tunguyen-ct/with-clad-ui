export default createUniversalPortal;
/**
 * Calls ReactDOM.createPortal at client side or push to createUniversalPortal.portals at server side
 *
 * @param  {any} children React's renderable components to be sent to portals
 */
declare function createUniversalPortal(children: any): number | import("react-dom/node_modules/@types/react").ReactPortal;
declare namespace createUniversalPortal {
    const portals: any[];
}
