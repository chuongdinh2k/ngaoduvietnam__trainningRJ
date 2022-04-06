import React from "react";

// WHAT: show background-color default when image is loading
export const useProgressiveImage = (src: string) => {
    const [sourceLoaded, setSourceLoaded] = React.useState<string>("");

    React.useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
};
