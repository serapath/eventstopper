module.exports = function eventStopper(event) {
  event.returnValue = false;
  event.cancelBubble = true;
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
};
