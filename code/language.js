if (/\bbr|pt\b/i.test(window.navigator.language)) {
  i18next.changeLanguage('br', (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    rerender();
  });
}
function rerender(){
  localize('.menu');
  localize('.me');
  localize('.content-container');
  localize('.tecs');
  localize('.footer');
}