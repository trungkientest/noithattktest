/**
 * SEO Starter Project JS
 * - No inline JS handlers in HTML (good practice)
 * - Adds small UX enhancements without blocking rendering (loaded with defer)
 */
(function(){
  const yearEl = document.querySelector('[data-year]');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Simple "Add to cart" demo action
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-to-cart]');
    if(!btn) return;
    const name = btn.getAttribute('data-product-name') || 'Sản phẩm';
    alert(`Đã thêm "${name}" vào giỏ.`);
  });

  // Highlight active nav link based on current filename
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a[data-nav]').forEach(a=>{
    if(a.getAttribute('href').toLowerCase() === path){
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });
})();
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-buy-now]');
  if(!btn) return;

  alert('Vui lòng chọn sản phẩm');
});
