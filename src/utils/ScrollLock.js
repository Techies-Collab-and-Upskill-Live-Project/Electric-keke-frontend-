export const LockScroll = () => {
  const element = document.body;
  element.style.overflowY = "hidden";
  element.classList.add('no-scrollbar')
};

export const UnlockScroll = () => {
  const element = document.body;
  element.style.overflowY = "scroll";
  element.classList.remove('no-scrollbar')
};
