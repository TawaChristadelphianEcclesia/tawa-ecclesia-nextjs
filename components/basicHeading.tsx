import React, { ReactNode } from "react";
import "twin.macro";
import tw from "twin.macro";
import Image from "next/image";

interface IBasicHeading {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  imageSrc?: string;
  alt?: string;
}

const FullBleedHeading: React.FC<IBasicHeading> = ({
  title,
  subtitle,
  imageSrc,
  alt,
}) => {
  return (
    <div tw="pt-8 max-w-screen-sm mx-auto px-5">
      <h1 tw="text-4xl font-medium font-serif pb-6">{title}</h1>
      <p tw="sm:text-xl text-gray-600 italic pb-6">{subtitle}</p>
      {imageSrc && (
        <div
          tw="aspect-w-16 aspect-h-9 mb-6"
          style={{
            position: "relative",
          }}
        >
          <Image
            src={imageSrc}
            alt={alt || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
};

export default FullBleedHeading;
