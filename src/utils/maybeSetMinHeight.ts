const maybeSetMinHeight = (e: HTMLDivElement): boolean | undefined => {
  if (!e) return;
  return e.clientHeight < window.innerHeight - 100;
};

export default maybeSetMinHeight;
