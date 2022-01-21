/**
 * Simulate change event where your input doesn't support onChange natively or to trigger onChange programatically
 * @param  {import ('react').MutableRefObject} ref  DOM element ref, required
 * @param  {any} newValue        new value to trigger
 * @param  {any?} currentValue   current value, if obmit, will attempt to get it from `ref.current.value`
 * @return {Event} Event object with proper `target` set, call `onChange(event)` if your component doesn't trigger onChange natively
 */
function simulateChangeEvent(ref, newValue, currentValue) {
  const current = ref?.current;
  if (!current) {
    // we can't proceed if current is not defined
    return null;
  }

  // Hack to simulate onChange event from tag cloud
  // https://github.com/facebook/react/issues/11488#issuecomment-347775628
  const lastValue = currentValue || current.value;
  // set new value
  current.value = newValue;
  /** @type {any} */
  const event = new Event('change', { bubbles: true });
  // hack React15
  event.simulated = true;
  // hack React16
  current._valueTracker?.setValue?.(lastValue);
  // this will set proper target to the event object and
  // make onChange handler be called from <input />, <select />
  current.dispatchEvent(event);

  // if `current` doesn't support onChange natively, call onChange(event) manually
  return event;
}

export default simulateChangeEvent;
