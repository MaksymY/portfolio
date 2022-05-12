let useObserver = (target, classEl) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classEl);
                observer.unobserve(entry.target);
            }
        },
        { threshold: [0.3] }
    );
    observer.observe(target);
}

export default useObserver;