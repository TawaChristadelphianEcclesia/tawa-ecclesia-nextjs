/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";

interface IRangeSlider {
    value?: number;
    onUpdate?: (ratio: number) => void;
    onScrub?: (ratio: number) => void;
    duration?: number;
}

const RangeSlider: React.FC<IRangeSlider> = ({
    value,
    onUpdate,
    duration,
    onScrub,
}) => {
    const [ratio, setRatio] = React.useState(0);
    const [dragging, setDragging] = React.useState(false);
    const draggingRef = React.useRef(false);
    const parentSliderEl = React.useRef<HTMLDivElement>(null);

    const onMouseDown = (e: any) => {
        // only left mouse button
        if (e.button !== 0) return;
        setDragging(true);
        e.stopPropagation();
        e.preventDefault();
    };
    const onMouseUp = (e: any) => {
        setDragging(false);
        e.stopPropagation();
        e.preventDefault();
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
    React.useEffect(() => {
        draggingRef.current = dragging;
        if (draggingRef.current) {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        } else if (!draggingRef.current) {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }
    }, [dragging]);
    React.useEffect(() => {
        value !== undefined && setRatio(value);
    }, [value]);
    React.useEffect(() => {
        onUpdate && onUpdate(ratio);
    }, [ratio, onUpdate]);

    const formatSeconds = (rawSeconds: number) => {
        const days = Math.floor(rawSeconds / (60 * 60 * 24));
        const hours = Math.floor(
            (rawSeconds - days * 60 * 60 * 24) / (60 * 60)
        );
        const minutes = Math.floor((rawSeconds - hours * 60 * 60) / 60);
        const seconds = Math.floor(rawSeconds - minutes * 60);

        const pad = (val: number) => `${val}`.padStart(2, "0");

        return (
            (days
                ? `${pad(days)}:`
                : "" + hours
                ? `${pad(hours)}:`
                : "" + minutes
                ? `${pad(minutes)}:`
                : "00:") + pad(seconds)
        );
    };

    return (
        <div
            tw="w-full h-12 cursor-pointer"
            className="group"
            role="slider"
            aria-valuemin={0}
            aria-valuemax={10000}
            aria-valuenow={10000 * ratio}
            onMouseDown={onMouseDown}
            ref={parentSliderEl}
        >
            <div tw="h-px bg-indigo-300 absolute top-6 w-full"></div>
            <div
                css={[
                    tw`bg-indigo-400 absolute left-0 w-full origin-left ease-linear group-active:transition-none transition-transform duration-200`,
                    `
                    top: 23px;
                    height: 3px;
                    transform: scale(${ratio}, 1);
                `,
                ]}
            />
            <div
                tw="absolute w-4 h-4 -ml-2 rounded-full bg-indigo-400 top-4 transform transition-all duration-200 ease-linear group-active:transition-transform group-active:duration-300 group-active:scale-150"
                css={`
                    left: ${ratio * 100}%;
                `}
            />
            {duration ? (
                <>
                    <div tw="absolute left-0 top-6 pl-1 text-sm text-gray-600">
                        {formatSeconds(duration * ratio)}
                    </div>
                    <div tw="absolute right-0 top-6 pr-1 text-sm text-gray-600">
                        {formatSeconds(duration)}
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default RangeSlider;
