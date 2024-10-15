import { useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(false);
  const [scrollPos, setScrollPos] = useState({
    initial: 0,
    final: 0,
    diff: 0,
  });

  const MouseDown = (event) => {
    setScroll(true);
    setScrollPos((prev) => ({ ...prev, initial: event.clientY }));
  };

  const MouseUp = () => setScroll(false);

  const MouseMove = (event) => {
    if (!scroll) return;
    const difference = -(event.clientY - scrollPos.initial);
    setScrollPos((prev) => ({
      ...prev,
      final: event.clientY,
      diff: difference / 10,
    }));
    event.currentTarget.scrollTop += scrollPos.diff;
  };

  const TouchStart = (event) => {
    setScroll(true);
    setScrollPos((prev) => ({ ...prev, initial: event.touches[0].clientY }));
  };

  const TouchEnd = (event) => setScroll(false);

  const TouchMove = (event) => {
    if (!scroll) return;
    const difference = -(e.touches[0].clientY - scrollPos.initial);
    setScrollPos((prev) => ({
      ...prev,
      final: e.touches[0].clientY,
      diff: difference / 10,
    }));
    e.currentTarget.scrollTop += scrollPos.diff;
  };

  return { MouseDown, MouseUp, MouseMove, TouchStart, TouchEnd, TouchMove };
};
