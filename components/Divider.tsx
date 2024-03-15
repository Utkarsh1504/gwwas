import React from "react";

type Props = {
  className: string;
  label: string;
};

function Divider(props: Props) {
  const { className } = props;
  return (
    <div className={" divide-solid divide-y divide-slate-300 " + className}>
      <div>{props.label}</div>
      <div></div>
    </div>
  );
}

export default Divider;
