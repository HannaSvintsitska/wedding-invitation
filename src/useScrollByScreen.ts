import { RefObject, useRef, useState } from "react";

const useScrollByScreen = (): [RefObject<HTMLDivElement>, () => void] => {
    const appRef = useRef<HTMLDivElement>(null);
    const [timeout, setTimeoutState] = useState<NodeJS.Timeout>();
    const [oldScroll, setOldScroll] = useState<number>();

    return [
        appRef,
        () => {
            clearTimeout(timeout);
            if (oldScroll === undefined) {
                setOldScroll(appRef.current?.scrollTop || 0);
            }

            const timeoutId = setTimeout(() => {
                const scrollTop = appRef.current?.scrollTop || 0;
                const screenHeight = appRef.current?.offsetHeight || 1;

                const slideToScrollTo = Math.floor((scrollTop + screenHeight * 0.5) / screenHeight);
                appRef.current?.scroll({
                    top: screenHeight * slideToScrollTo,
                    behavior: 'smooth',
                });
                setOldScroll(undefined);
            }, 50);

            setTimeoutState(timeoutId);
        },
    ];
}

export default useScrollByScreen;
