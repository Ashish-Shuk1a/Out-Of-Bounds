import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

export default function Socials() {
  return (
    <div>
      <FacebookShareButton
        url={"https://peing.net/ja/"}
        quote={""}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo_some-network_share-button"
      >
        <FacebookIcon size={32} round /> Facebook share
      </FacebookShareButton>

      <TwitterShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={32} round />
        Twitter share
      </TwitterShareButton>
    </div>
  );
}
