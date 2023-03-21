// Данный код был перенес с сайта https://v5.reactrouter.com/web/guides/scroll-restoration, для того, чтобы при переходи на другие страницы (Home, Projects, Contacts) боковой скрол сразу оказывался на верху, то есть показывал страницу с ее начала. Чтобы он работал в App.js после Router добавили ScrollToTop.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
