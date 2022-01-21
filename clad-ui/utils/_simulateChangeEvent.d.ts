export default simulateChangeEvent;
/**
 * Simulate change event where your input doesn't support onChange natively or to trigger onChange programatically
 * @param  {import ('react').MutableRefObject} ref  DOM element ref, required
 * @param  {any} newValue        new value to trigger
 * @param  {any?} currentValue   current value, if obmit, will attempt to get it from `ref.current.value`
 * @return {Event} Event object with proper `target` set, call `onChange(event)` if your component doesn't trigger onChange natively
 */
declare function simulateChangeEvent(ref: import("react").MutableRefObject<any>, newValue: any, currentValue: any | null): Event;
