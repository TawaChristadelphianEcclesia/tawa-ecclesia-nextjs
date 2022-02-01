import React from "react";
import StandardHeader, { IStandardHeader } from "../../elements/StandardHeader";

export type IStandardHeaderBlock = IStandardHeader;

const StandardHeaderBlock: React.FC<IStandardHeaderBlock> = (props) => (
    <StandardHeader {...props} />
);

export default StandardHeaderBlock;
