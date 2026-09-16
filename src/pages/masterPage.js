import wixLocationFrontend from 'wix-location-frontend';
import wixWindowFrontend from 'wix-window-frontend';

$w.onReady(function () {
    if (wixLocationFrontend.query.open === 'booking') {
        wixWindowFrontend.openLightbox('Швидка форма запису');
    }
});
