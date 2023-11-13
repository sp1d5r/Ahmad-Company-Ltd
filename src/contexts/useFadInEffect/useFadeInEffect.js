import React, {useEffect, useRef} from "react";
import "./useFadeInEffect.css";

const useFadeInEffect = (children, threshold, duration="0.5s", delay="0s") => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationDuration = duration;
                        entry.target.style.animationDelay = delay;
                        entry.target.classList.add(`fade-in`);
                        entry.target.classList.remove(`fade-out`);
                    } else {
                        entry.target.classList.add(`fade-out`);
                        entry.target.classList.remove(`fade-in`);
                    }
                });
            },
            {
                threshold: threshold,
            }
        );

        if (ref.current) {
            ref.current.classList.add(`initial-fade-in`);
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay, duration]);

    return React.Children.map(children, (child) => {
        return React.cloneElement(child, {ref});
    });
}

export default useFadeInEffect;