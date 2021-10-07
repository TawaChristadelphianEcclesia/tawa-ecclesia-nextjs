import React from "react";
// import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Image from "next/image";

import "twin.macro";
import tw, { css } from "twin.macro";
import { ReactNode } from "react";

interface IFullBleedHeading {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  image: string;
  imageBlurDataURL?: string;
  alt?: string;
  textColor?: string;
  textPosition?: "top" | "bottom";
}

const FullBleedHeading: React.FC<IFullBleedHeading> = ({
  title,
  subtitle,
  image,
  imageBlurDataURL,
  alt,
  textColor,
  textPosition,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: `100%`,
        marginLeft: 0,
        marginRight: 0,
        // marginBottom: `1.45rem`,
        height: "60vh",
        overflow: "hidden",
      }}
    >
      <Image
        src={image}
        alt={alt || ""}
        layout="fill"
        sizes="100%"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={imageBlurDataURL}
      />
      <div
        style={{
          position: "absolute",
          margin: "20px",
          color: textColor,
          ...(!textPosition || textPosition == "bottom"
            ? { bottom: 0 }
            : { top: 0 }),
        }}
      >
        <h1 tw="text-5xl sm:text-7xl font-bold font-serif">{title}</h1>
        <p tw="sm:text-2xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default FullBleedHeading;
