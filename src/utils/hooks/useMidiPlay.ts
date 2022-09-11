import { useEffect } from "react";
import React from "react";
import MIDI from "midi.js";

interface Props {
  url: string;
  loop: boolean;
  auto: boolean;
  // onUnmount: () => void;
}

function playMidi(url, loop?) {
  MIDI.Player.removeListener(); // removes current listener.
  let noneTriggered = true;

  MIDI.Player.addListener((data) => {
    const now = data.now; // where we are now
    const end = data.end; //

    if (end - now <= 1000 && noneTriggered && loop) {
      noneTriggered = false;

      setTimeout(() => {
        MIDI.Player.stop();
        playMidi(url, loop);
      }, 1000);
    }
  });
  // "/bg.mp3.mid"
  MIDI.Player.loadFile(url, () => {
    MIDI.Player.start();
  });
}

const useMidiPlay = ({ url, loop, auto }: Props) => {
  useEffect(() => {
    if (auto) {
      playMidi(url, loop);
    } else {
      MIDI.Player.stop();
    }

    return () => MIDI.Player.stop();
  }, [auto]);
};

export default useMidiPlay;
