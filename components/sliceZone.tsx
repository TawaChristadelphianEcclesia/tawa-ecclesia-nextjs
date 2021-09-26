import "twin.macro";
import tw, { css } from "twin.macro";
import { RichText } from "prismic-reactjs";
import React from "react";
import { GeneralPageQuery_prismicGeneralPage_data } from "../pages/__generated__/GeneralPageQuery";

type Slices = GeneralPageQuery_prismicGeneralPage_data["body"];

const SliceZone: React.FC<{ data: Slices }> = ({ data }) => {
  return (
    <>
      {data.map((slice) => {
        if (slice.slice_type === "text") {
          return (
            <article tw="prose">
              {RichText.render(slice.primary.text.raw)}
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
