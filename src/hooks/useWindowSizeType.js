import { useState, useEffect } from "react";
import {WindowSizeType} from "../WindowSizeType.js";

export function useWindowSizeType() {
    const [sizeType, setSizeType] = useState(findWindowSizeType(window.innerWidth));

    useEffect(() => {
        const handleResize = () => setSizeType(findWindowSizeType(window.innerWidth));
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return sizeType;
}

function findWindowSizeType(width) {
    if (width < 900) return WindowSizeType.MOBILE;
    return WindowSizeType.DESKTOP;
}
