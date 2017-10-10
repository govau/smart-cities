export default function blockScroll(shouldBlock) {
  if (shouldBlock) {
    document.body.classList.add('block-scroll');
  } else {
    document.body.classList.remove('block-scroll');
  }
}
