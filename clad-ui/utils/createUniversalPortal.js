import ReactDOM from 'react-dom';

/**
 * Calls ReactDOM.createPortal at client side or push to createUniversalPortal.portals at server side
 *
 * @param  {any} children React's renderable components to be sent to portals
 */
function createUniversalPortal(children) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // client side
    return ReactDOM.createPortal(children, document.body);
  } else {
    // server side
    // TODO: should we take care of removing portal instances?
    return createUniversalPortal.portals.push(children);
  }
}

/** @type {Array} */
createUniversalPortal.portals = [];

export default createUniversalPortal;
