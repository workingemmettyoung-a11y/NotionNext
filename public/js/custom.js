// 这里编写自定义js脚本；将被静态引入到页面中
// /public/js/custom.js
if (typeof window !== 'undefined') {
  const el = document.createElement('div')
  el.className = 'text-sm opacity-70 mt-2'
  el.innerHTML = `
    <span id="busuanzi_container_site_pv">本站总访问量 <span id="busuanzi_value_site_pv"></span> 次</span>
    &nbsp;|&nbsp;
    <span id="busuanzi_container_site_uv">访客数 <span id="busuanzi_value_site_uv"></span> 人</span>
    &nbsp;|&nbsp;
    <span id="busuanzi_container_page_pv">本页阅读 <span id="busuanzi_value_page_pv"></span> 次</span>
  `
  document.querySelector('footer')?.appendChild(el)
}
