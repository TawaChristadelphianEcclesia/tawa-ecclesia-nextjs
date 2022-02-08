/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import React from "react";
import Image from "next/image";
import { PauseIcon, PlayIcon } from "@heroicons/react/outline";
import RewindTenIcon from "../assets/replayTen.svg";
import ForwardThirtyIcon from "../assets/forwardThirty.svg";

import RangeSlider from "../elements/RangeSlider";

export interface IMediaTrack {
    thumbnail: IImageData;
    title: string;
    fileUrl: string;
}

interface IMediaPlayer {
    track: IMediaTrack;
}

const MediaPlayer: React.FC<IMediaPlayer> = ({ track }) => {
    const [playing, setPlaying] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [trackProgress, setTrackProgress] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const audioRef = React.useRef<HTMLAudioElement>();
    // const { duration } = audioRef.current;
    const intervalRef = React.useRef<number>();
    const durationIntervalRef = React.useRef<number>();
    // const isReady = React.useRef(false);

    // define audio

    React.useEffect(() => {
        audioRef.current?.pause();
        clearInterval(durationIntervalRef.current);
        setDuration(0);
        setTrackProgress(0);
        audioRef.current = new Audio(track.fileUrl);
        audioRef.current.oncanplay = () => {
            setLoading(false);
        };
        setPlaying(true);
        audioRef.current?.play();
        startDurationTimer();
    }, [track]);

    // play pause
    React.useEffect(() => {
        if (playing) {
            audioRef.current?.play();
            startProgressTimer();
        } else {
            audioRef.current?.pause();
        }
    }, [playing]);

    // cleanup on unmount
    React.useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current?.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    // timer to set initial duration
    const startDurationTimer = () => {
        clearInterval(durationIntervalRef.current);
        durationIntervalRef.current = window.setInterval(() => {
            console.log(audioRef.current);
            if (
                audioRef.current?.duration &&
                !isNaN(audioRef.current?.duration)
            ) {
                setDuration(audioRef.current?.duration);
                clearInterval(durationIntervalRef.current);
            }
        }, 100);
    };

    // timer to check on track and set progress
    const startProgressTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(() => {
            if (audioRef.current?.ended) {
                // toNextTrack();
                setPlaying(false);
            } else {
                setTrackProgress(audioRef.current?.currentTime ?? 0);
            }
        }, 200);
    };

    const getProgressRatio = (trackProgress: number, duration: number) =>
        duration == 0 ? 0 : trackProgress / duration;

    const togglePlaying = () => setPlaying(!playing);

    const updateProgress = (value: number) => {
        if (!audioRef.current) return;
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
        startProgressTimer();
    };

    const onScrub = (ratio: number) => {
        if (!audioRef.current) return;
        const value =
            (isNaN(audioRef.current?.duration ?? 0)
                ? 0
                : audioRef.current?.duration ?? 0) * ratio;
        updateProgress(value);
    };

    const updateProgressBy = (secs: number) => {
        if (!audioRef.current) return;
        const resultProgress =
            audioRef.current.currentTime + secs < 0
                ? 0
                : audioRef.current.currentTime + secs >
                  audioRef.current.duration
                ? audioRef.current.duration
                : audioRef.current.currentTime + secs;
        updateProgress(resultProgress);
    };

    const formatSeconds = (
        rawSeconds: number,
        format: "colon" | "text" = "colon"
    ) => {
        const days = Math.floor(rawSeconds / (60 * 60 * 24));
        const hours = Math.floor(
            (rawSeconds - days * 60 * 60 * 24) / (60 * 60)
        );
        const minutes = Math.floor((rawSeconds - hours * 60 * 60) / 60);
        const seconds = Math.floor(rawSeconds - minutes * 60);

        const pad = (val: number) => `${val}`.padStart(2, "0");

        if (format == "text") {
            return (
                (days ? `${days} days, ` : "") +
                (hours ? `${hours} hrs, ` : "") +
                (minutes ? `${minutes} mins, ` : "") +
                `${seconds} secs`
            );
        } else {
            return (
                (days ? `${pad(days)}:` : "") +
                (hours ? `${pad(hours)}:` : "") +
                (minutes ? `${pad(minutes)}:` : "00:") +
                pad(seconds)
            );
        }
    };

    return (
        <div tw="fixed h-24 filter ring-2 ring-black ring-opacity-5 bg-gray-50 left-0 right-0 bottom-0 z-50">
            <div tw="absolute w-full -translate-y-1/2">
                <RangeSlider
                    value={getProgressRatio(
                        trackProgress,
                        audioRef.current?.duration ?? 0
                    )}
                    onScrub={(ratio) => onScrub(ratio)}
                    max={audioRef.current?.duration}
                    formatFunction={formatSeconds}
                />
            </div>
            <div tw="flex w-full justify-between">
                <div tw="pt-6 pl-3 flex">
                    <div tw="mr-3">
                        <div tw="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden relative">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                                {...track.thumbnail}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 tw="font-bold mt-0 pt-0 leading-none line-clamp-1 overflow-ellipsis">
                            {track.title}
                        </h3>
                        <p tw="text-sm text-gray-700">
                            {loading
                                ? "Loading..."
                                : `${formatSeconds(
                                      duration - trackProgress,
                                      "text"
                                  )} left`}
                        </p>
                    </div>
                </div>
                <div tw="pt-4 flex text-gray-500">
                    <button
                        tw="hidden sm:block"
                        onClick={() => updateProgressBy(-10)}
                    >
                        <RewindTenIcon tw="w-8 h-8" />
                    </button>
                    <button onClick={togglePlaying} tw="mx-5">
                        {playing ? (
                            <PauseIcon tw="w-11 h-11" />
                        ) : (
                            <PlayIcon tw="w-11 h-11" />
                        )}
                    </button>
                    <button
                        tw="hidden sm:block"
                        onClick={() => updateProgressBy(30)}
                    >
                        <ForwardThirtyIcon tw="w-8 h-8" />
                    </button>
                </div>
                {/* <div tw="hidden sm:block">
                    volume slider
                </div> */}
                <div tw="hidden sm:block pt-9 pr-8 text-gray-700">
                    <p>
                        {formatSeconds(trackProgress)}/{formatSeconds(duration)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MediaPlayer;
