export function action() {
  return 'home page action';
}

export function loader() {
  throw new Error('home page loader');

  return 'home page data';
}
