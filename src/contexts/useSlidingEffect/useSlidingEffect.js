import React, {useEffect, useRef} from 'react';
import "./useSlidingEffect.css";

const useSlidingEffect = (children, from, threshold, duration="0.5s", delay="0s") => {
    const ref = useRef(null);

    useEffect(() => {
        // Assertion to ensure 'from' prop is valid
        const validDirections = ['left', 'right', 'top', 'bottom'];
        if (!validDirections.includes(from)) {
            console.warn(`Invalid 'from' prop: ${from}. Expected one of ${validDirections.join(', ')}.`);
            return; // Optionally return early to prevent applying incorrect styles
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationDuration = duration;
                        entry.target.style.animationDelay = delay;
                        entry.target.classList.add(`slide-in-${from}`);
                        entry.target.classList.remove(`slide-out-${from}`);
                    } else {
                        entry.target.classList.add(`slide-out-${from}`);
                        entry.target.classList.remove(`slide-in-${from}`);
                    }
                });
            },
            {
                threshold: threshold,
            }
        );

        if (ref.current) {
            ref.current.classList.add(`slide-initial-${from}`);
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [from]);



    return React.Children.map(children, (child) => {
        return React.cloneElement(child, {ref});
    });
};

export default useSlidingEffect;
