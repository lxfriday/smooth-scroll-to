/**
 * 差值接近于0，实现缓动效果2
 * @param ref dom
 * @param pos {number} 滚动到的位置
 * @param rate {number} 速率
 */
function smoothScrollTo(ref = null, pos = 0, rate = 2) {
  if (rate <= 1) {
    console.error('rate should be bigger than 1')
    return
  }

  if (!ref) {
    console.error('ref not exist')
    return
  }

  let lastPos = 0

  let { scrollTop } = ref

  function top() {
    scrollTop = (pos + ref.scrollTop) / rate
    if (scrollTop === lastPos) return

    // 临界判断，终止动画
    if (Math.abs(scrollTop - pos) < 1) {
      ref.scrollTop = pos
      return
    }
    ref.scrollTop = scrollTop
    lastPos = scrollTop
    requestAnimationFrame(top)
  }
  top()
}

module.exports = smoothScrollTo
