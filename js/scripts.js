/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookieConsentBanner');
  const acceptBtn = document.getElementById('acceptCookies');

  if (banner && acceptBtn) {
    if (!localStorage.getItem('infoBannerDismissed')) {
      banner.style.display = 'block';
    } else {
      banner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', function () {
      localStorage.setItem('infoBannerDismissed', 'true');
      banner.style.display = 'none';
    });
  }
});
