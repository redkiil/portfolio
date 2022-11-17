export function checkIfIsMobile(){
    var windowWidth = window.screen.width < window.outerWidth ?
    window.screen.width : window.outerWidth;
    return windowWidth < 500;
}