import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useTitle = () => {
  const location = useLocation();
  const titleElement = document.querySelector('title');
  const base = useMemo(() => '오늘 당신의 날씨는', []);

  useEffect(() => {
    if (titleElement) {
      if (location.pathname === '/login') {
        titleElement.innerHTML = `${base} | 로그인`;
      } else if (location.pathname === '/signup') {
        titleElement.innerHTML = `${base} | 회원가입`;
      } else if (location.pathname === '/') {
        titleElement.innerHTML = `${base} | 홈`;
      } else {
        titleElement.innerHTML = `${base} | 404페이지`;
      }
    }
  }, [location.pathname]);
};

export default useTitle;
