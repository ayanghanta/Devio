import { PiYoutubeLogo } from "react-icons/pi";
import ToolButton from "./ToolButton";
import { useState } from "react";
import {
  YOUTUBE_VDEIO_HEIGHT,
  YOUTUBE_VDEIO_WIDTH,
} from "@/app/_utils/constants";

function YoutubeButton({ editor }) {
  if (!editor) {
    return null;
  }

  function addYoutubeVideo() {
    const url = prompt("Enter YouTube URL");

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: YOUTUBE_VDEIO_WIDTH,
        height: YOUTUBE_VDEIO_HEIGHT,
      });
    }
  }
  return (
    <ToolButton onClick={addYoutubeVideo}>
      <PiYoutubeLogo className="text-base xs:text-lg sm:text-xl" />
    </ToolButton>
  );
}

export default YoutubeButton;
