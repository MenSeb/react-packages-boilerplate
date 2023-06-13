export const target = document.createElement('div');
export const type = 'resize';
export const listener = jest.fn();
export const options: AddEventListenerOptions = {
  capture: false,
  once: false,
  passive: false,
};
