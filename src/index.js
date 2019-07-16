/**
 * 差值接近于0，实现缓动效果2
 * @param ref dom
 * @param pos {number} 滚动到的位置
 * @param rate {number} 速率
 */
function smoothScrollTo(ref, pos, rate = 2) {
  if (!ref) {
    return
  }

  let { scrollTop } = ref

  function top() {
    scrollTop = (pos + ref.scrollTop) / rate

    // 临界判断，终止动画
    if (Math.abs(scrollTop - pos) < 1) {
      ref.scrollTop = pos
      return
    }
    ref.scrollTop = scrollTop
    requestAnimationFrame(top)
  }
  top()
}

module.exports = smoothScrollTo
