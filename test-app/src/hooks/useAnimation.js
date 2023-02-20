export const useAppLoaded = (ref) => {
  window.onload = () => ref.current.classList.add("loaded");
};
