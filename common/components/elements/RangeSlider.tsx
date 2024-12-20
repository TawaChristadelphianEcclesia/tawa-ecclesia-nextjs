/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";

interface IRangeSlider {
    value?: number;
    onUpdate?: (ratio: number) => void;
    onScrub?: (ratio: number) => void;
    max?: number;
    formatFunction?: (val: number) => string;
}

const RangeSlider: React.FC<IRangeSlider> = ({
    value,
    onUpdate,
    max,
    onScrub,
    formatFunction = (val) => `${val}`,
}) => {
    const [ratio, setRatio] = React.useState(0);
    const [dragging, setDragging] = React.useState(false);
    const draggingRef = React.useRef(false);
    const parentSliderEl = React.useRef<HTMLDivElement>(null);

    const onMouseDown = (e: any) => {
        // only left mouse button
        if (e.button !== 0) return;
        setDragging(true);
        console.log("set dragging true");
        e.stopPropagation();
        e.preventDefault();
    };
    const onTouchStart = (e: any) => {
        // only left mouse button
        // if (e.button !== 0) return;
        setDragging(true);
        console.log("set dragging true");
        // e.stopPropagation();
        // e.preventDefault();
    };
    const onMouseUp = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        if (!draggingRef.current) return;
        let ratio =
            (e.pageX - parentSliderEl!.current!.getBoundingClientRect().left) /
            parentSliderEl!.current!.getBoundingClientRect().width;
        ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
        setRatio(ratio);
        onScrub && onScrub(ratio);
        setDragging(false);
    };
    const onTouchEnd = (e: any) => {
        if (e.touches.length) return;
        // e.stopPropagation();
        // e.preventDefault();
        if (!draggingRef.current) return;
        // let ratio =
        //     (e.pageX - parentSliderEl!.current!.getBoundingClientRect().left) /
        //     parentSliderEl!.current!.getBoundingClientRect().width;
        // ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
        // setRatio(ratio);
        // onScrub && onScrub(ratio);
        setDragging(false);
    };
    const onMouseMove = (e: any) => {
        if (!draggingRef.current) return;
        let ratio =
            (e.pageX - parentSliderEl!.current!.getBoundingClientRect().left) /
            parentSliderEl!.current!.getBoundingClientRect().width;
        ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
        setRatio(ratio);
        onScrub && onScrub(ratio);
        e.stopPropagation();
        e.preventDefault();
    };
    const onTouchMove = (e: any) => {
        if (!draggingRef.current) return;
        const pageX = e.touches[0].pageX;
        let ratio =
            (pageX - parentSliderEl!.current!.getBoundingClientRect().left) /
            parentSliderEl!.current!.getBoundingClientRect().width;
        ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
        setRatio(ratio);
        onScrub && onScrub(ratio);
        e.stopPropagation();
        // e.preventDefault();
    };
    React.useEffect(() => {
        draggingRef.current = dragging;
        if (draggingRef.current) {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("touchmove", onTouchMove);
            document.addEventListener("mouseup", onMouseUp);
            document.addEventListener("touchend", onTouchEnd);
        } else if (!draggingRef.current) {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("touchend", onTouchEnd);
        }
    }, [dragging]);
    React.useEffect(() => {
        value !== undefined && setRatio(isNaN(value) ? 0 : value);
    }, [value]);
    React.useEffect(() => {
        onUpdate && onUpdate(ratio);
    }, [ratio, onUpdate]);

    return (
        <div
            tw="w-full h-12 cursor-pointer"
            className="group"
            role="slider"
            aria-valuemin={0}
            aria-valuemax={10000}
            aria-valuenow={10000 * ratio}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            ref={parentSliderEl}
        >
            <div tw="h-px bg-indigo-300 absolute top-6 w-full"></div>
            <div
                css={[
                    tw`bg-indigo-400 absolute left-0 w-full origin-left ease-linear group-active:transition-none group-focus:transition-none transition-transform duration-200`,
                    `
                    top: 23px;
                    height: 3px;
                    transform: scale(${ratio}, 1);
                `,
                ]}
            />
            <div
                tw="absolute w-4 h-4 -ml-2 rounded-full bg-indigo-400 top-4 transform transition-all duration-200 ease-linear group-active:transition-transform group-focus:transition-transform group-active:duration-300 group-active:scale-150 group-focus:scale-150"
                css={`
                    left: ${ratio * 100}%;
                `}
            />
            {max ? (
                <>
                    <div tw="absolute left-0 top-6 pl-1 text-sm text-gray-600">
                        {formatFunction(max * ratio)}
                    </div>
                    <div tw="absolute right-0 top-6 pr-1 text-sm text-gray-600">
                        {formatFunction(max)}
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default RangeSlider;
