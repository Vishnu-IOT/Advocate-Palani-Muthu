import { useEffect, useRef, useState } from "react";

const Counter = ({ start = 1, end = 5, duration = 1000 }) => {
    const [count, setCount] = useState(start);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    const totalSteps = end - start;
                    const intervalTime = duration / totalSteps;

                    let current = start;
                    const interval = setInterval(() => {
                        current += 1;
                        setCount(current);

                        if (current >= end) {
                            clearInterval(interval);
                        }
                    }, intervalTime);
                }
            },
            { threshold: 0.5 } // trigger when 50% visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [start, end, duration]);

    return <span ref={ref}>{count}</span>;
};

export default Counter;
