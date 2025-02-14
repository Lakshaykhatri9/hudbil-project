import { useState, useEffect } from "react";
import { gsap } from "gsap";

const ScrollDownButton = () => {
  const [, setIsVisible] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [debouncedPos, setDebouncedPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [firstAnimationTriggered, setFirstAnimationTriggered] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left + 2,
      y: e.clientY - rect.top + 2,
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedPos(cursorPos);
    }, 20);

    return () => {
      clearTimeout(handler);
    };
  }, [cursorPos]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const scrollDown = () => {
    window.scrollBy({ top: 700, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (window.scrollY > 0 && !firstAnimationTriggered) {
    setFirstAnimationTriggered(true);
    const tl = gsap.timeline({
      defaults: {
        ease: "linear",
        duration: 2,
      },
    });

    tl.fromTo(
      ".section-part",
      { y: 0, opacity: 1 },
      {
        y: 100,
        opacity: 0,
        ease: "linear",
      }
    );
  }

  if (window.scrollY === 0 && firstAnimationTriggered) {
    setFirstAnimationTriggered(false);
    const tl = gsap.timeline({
      defaults: {
        ease: "linear",
        duration: 1,
      },
    });

    tl.fromTo(
      ".section-part",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "linear",
      }
    );
  }

  return (
    <div
      className={`ScrollDown z-[9999] fixed right-24 bottom-6 cursor-default hidden md:block`}
    >
      <div className="section-part flex items-center justify-between gap-3">
        <div className="text-[15px] font-bold cursor-default">Scroll Down</div>
        <div
          className="w-12 h-12 flex items-center justify-end relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            onClick={scrollDown}
            fill="white"
            height="26px"
            width="26px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className="cursor-effect cursor-none"
            style={
              isHovering
                ? {
                    position: "absolute",
                    left: debouncedPos.x,
                    top: debouncedPos.y,
                    transform: "translate(-50%, -50%)",
                    transition: "left 0.3s ease-out, top 0.3s ease-out",
                  }
                : {}
            }
          >
            <g>
              <g>
                <g>
                  <path
                    d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
				l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17
				C369.42,189.917,355.913,189.917,347.582,198.248z"
                    stroke="white"
                    strokeWidth="15"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollDownButton;
