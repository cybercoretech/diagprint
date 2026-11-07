/* diagprint site: themes come from the universal Cybercore chooser
 * (https://cybercoretech.github.io/kit/chooser.js, <cybercore-theme-chooser>
 * in the header): the 600-theme registry plus the 12 shared signature
 * mashups. SITE.defaultTheme / SITE.mashups in index.html set the site
 * default. This file keeps the small window.DP API the other scripts use.
 */
(() => {
  const store = () => window.CybercoreThemes;
  let tt;
  function toast(msg) {
    const t = document.querySelector('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 1700);
  }
  window.DP = {
    toast,
    apply: id => store()?.apply(id),
    all: () => store()?.ids || [],
    labelOf: id => store()?.labelOf(id) || id,
    get palette() { return store()?.currentPalette; },
    get id() { return store()?.current; }
  };
})();
