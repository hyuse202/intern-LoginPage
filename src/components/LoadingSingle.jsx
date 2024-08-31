import React from "react";
import LoadingGIF from "@/assets/loading.gif";
import Image from "next/image";

function LoadingSingle() {
  return (
    <div>
      <div className="item-center inline-block mt-2">
        <Image src={LoadingGIF} alt="loading..." width={25} height={25} />
      </div>
    </div>
  );
}

export default LoadingSingle;
