const maybeSetMinHeight = (e: HTMLDivElement): boolean | undefined => {
  if (!e) return;
  const elHeight: number = e.clientHeight;
  const winHeight: number = window.innerHeight;
  console.log(elHeight);
  console.log(winHeight);
  return e.clientHeight < window.innerHeight - 100;
};

export default maybeSetMinHeight;
