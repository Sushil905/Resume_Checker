import { motion } from "framer-motion";

const webLines = [
  [600, 380, 600, 20],
  [600, 380, 1020, 64],
  [600, 380, 1170, 380],
  [600, 380, 1030, 704],
  [600, 380, 600, 740],
  [600, 380, 170, 704],
  [600, 380, 30, 380],
  [600, 380, 180, 64],
  [600, 90, 960, 122],
  [600, 150, 1004, 214],
  [600, 215, 1102, 318],
  [600, 295, 1160, 380],
  [600, 465, 1160, 380],
  [600, 545, 1108, 446],
  [600, 612, 1010, 548],
  [600, 684, 962, 626],
  [600, 90, 240, 122],
  [600, 150, 196, 214],
  [600, 215, 98, 318],
  [600, 295, 40, 380],
  [600, 465, 40, 380],
  [600, 545, 92, 446],
  [600, 612, 190, 548],
  [600, 684, 238, 626]
];

const webCurves = [
  "M600 90 C710 94 820 106 960 122",
  "M600 150 C730 150 842 172 1004 214",
  "M600 215 C772 220 928 256 1102 318",
  "M600 295 C782 292 966 320 1160 380",
  "M600 465 C780 462 968 436 1160 380",
  "M600 545 C774 536 926 502 1108 446",
  "M600 612 C728 604 854 580 1010 548",
  "M600 684 C708 676 820 654 962 626",
  "M600 90 C492 94 382 106 240 122",
  "M600 150 C470 150 358 172 196 214",
  "M600 215 C428 220 272 256 98 318",
  "M600 295 C418 292 234 320 40 380",
  "M600 465 C420 462 232 436 40 380",
  "M600 545 C426 536 274 502 92 446",
  "M600 612 C472 604 346 580 190 548",
  "M600 684 C492 676 380 654 238 626"
];

const dots = [
  [600, 20],
  [1020, 64],
  [1170, 380],
  [1030, 704],
  [600, 740],
  [170, 704],
  [30, 380],
  [180, 64],
  [600, 380],
  [960, 122],
  [1004, 214],
  [1102, 318],
  [1108, 446],
  [1010, 548],
  [240, 122],
  [196, 214],
  [98, 318],
  [92, 446],
  [190, 548]
];

export default function SpiderNetBackground() {
  return (
    <div className="resume-bg" aria-hidden="true">
      <svg className="cyber-web" viewBox="0 0 1200 760">
        <defs>
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>

          <filter id="webGlow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#webGlow)">
          {webLines.map(([x1, y1, x2, y2], index) => (
            <motion.line
              className="motion-web-line"
              key={`line-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#blueGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.28, 1, 0.42] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.08 }}
            />
          ))}

          {webCurves.map((path, index) => (
            <motion.path
              className="motion-web-curve"
              key={`curve-${index}`}
              d={path}
              stroke="url(#blueGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.92, 0.36] }}
              transition={{ duration: 3.8, repeat: Infinity, delay: index * 0.1 }}
            />
          ))}
        </g>

        <g className="cyber-web-nodes">
          {dots.map(([cx, cy], index) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={cx === 600 && cy === 380 ? 7 : 5}
              animate={{ scale: [1, 1.55, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.12 }}
            />
          ))}
        </g>
      </svg>

      <motion.div
        className="moving-glow"
        animate={{ x: [0, 760, 260, 0], y: [0, 240, 520, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="cyber-spider">
        <span className="spider-body" />
        <span className="spider-head" />
        <i className="leg l1" />
        <i className="leg l2" />
        <i className="leg l3" />
        <i className="leg l4" />
        <i className="leg r1" />
        <i className="leg r2" />
        <i className="leg r3" />
        <i className="leg r4" />
      </div>
    </div>
  );
}
