import "twin.macro";
import tw, { css } from "twin.macro";
import { RichText } from "prismic-reactjs";
import React from "react";
import { ISliceData } from "../lib/api";

const SliceZone: React.FC<{ slices: ISliceData[] }> = ({ slices }) => {
  return (
    <>
      {slices.map((slice) => {
        if (slice.slice_type === "text") {
          return (
            <article tw="prose mx-auto font-serif p-5">
              {RichText.render(slice.primary.text)}
            </article>
          );
        } else {
          return (
            <article>
              Slice of type {slice.slice_type} not implemented yet
            </article>
          );
        }
      })}
    </>
  );
};

export default SliceZone;
