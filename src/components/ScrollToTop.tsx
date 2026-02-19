import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo(0, 0);
            }
        };

        // Small timeout to ensure DOM is ready
        const timeoutId = setTimeout(handleScroll, 100);

        return () => clearTimeout(timeoutId);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
