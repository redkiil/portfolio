if (/\bbr|pt\b/i.test(window.navigator.language)) {
  i18next.changeLanguage('br', (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    rerender();
  });
}else{
  i18next.changeLanguage('en', (err, t) => {
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
export function toggleLanguage()
{
 let curlang = i18next.language;
 let newlang = (curlang === "br") ? "en" : "br";
  i18next.changeLanguage(newlang, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    rerender();
  });
}