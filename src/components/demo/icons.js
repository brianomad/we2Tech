/** @jsx jsx */
import { jsx } from 'theme-ui';

const P = {
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  arrowLeft: <><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></>,
  arrowUp: <><path d="M12 19V5" /><path d="M5 12l7-7 7 7" /></>,
  arrowDown: <><path d="M12 5v14" /><path d="M19 12l-7 7-7-7" /></>,
  bag: <><path d="M6 2l-1.5 3h15L18 2z" /><path d="M4.5 5v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V5" /><path d="M9 9v2a3 3 0 0 0 6 0V9" /></>,
  barChart: <><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
  bolt: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
  box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.3 7L12 12l8.7-5" /><path d="M12 22V12" /></>,
  building: <><path d="M3 21h18" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /><path d="M9 21v-4h6v4" /><path d="M9 8h.01" /><path d="M15 8h.01" /><path d="M9 12h.01" /><path d="M15 12h.01" /></>,
  cake: <><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" /><path d="M2 21h20" /><path d="M7 8v3" /><path d="M12 8v3" /><path d="M17 8v3" /><path d="M7 4h.01" /><path d="M12 4h.01" /><path d="M17 4h.01" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></>,
  car: <><path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z" /><path d="M3 13h18" /><circle cx="7" cy="17" r="0.5" /><circle cx="17" cy="17" r="0.5" /></>,
  camera: <><path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" /><circle cx="12" cy="13" r="3.5" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
  check: <path d="M20 6L9 17l-5-5" />,
  checkCircle: <><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" /><path d="M22 4L12 14l-3-3" /></>,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronRight: <path d="M9 18l6-6-6-6" />,
  chick: <><ellipse cx="12" cy="13" rx="7" ry="5" /><path d="M12 8V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3" /><path d="M12 8V5a3 3 0 0 0-3-3 3 3 0 0 0-3 3" /><path d="M12 8V6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  cloud: <path d="M18 10h-1.3A7 7 0 0 0 5 13a4 4 0 0 0 1 7.9h12a4 4 0 0 0 0-8z" />,
  coffee: <><path d="M17 8h1a4 4 0 0 1 0 8h-1" /><path d="M3 8h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z" /><path d="M7 2v2" /><path d="M11 2v2" /><path d="M15 2v2" /></>,
  creditCard: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h4" /></>,
  door: <><path d="M14 22v-8l6-4v12z" /><path d="M20 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16" /><path d="M14 18h.01" /></>,
  dot: <circle cx="12" cy="12" r="1" />,
  dumbbell: <><path d="M6.5 6.5l11 11" /><path d="M21 21l-1-1" /><path d="M3 3l1 1" /><path d="M18 22l4-4" /><path d="M2 6l4-4" /><path d="M3 10l7-7" /><path d="M14 21l7-7" /></>,
  flower: <><circle cx="12" cy="12" r="3" /><path d="M12 9a3 3 0 0 0 0-6 3 3 0 0 0 0 6z" /><path d="M12 15a3 3 0 0 0 0 6 3 3 0 0 0 0-6z" /><path d="M9 12a3 3 0 0 0-6 0 3 3 0 0 0 6 0z" /><path d="M15 12a3 3 0 0 0 6 0 3 3 0 0 0-6 0z" /><path d="M9.8 9.8a3 3 0 0 0-4.2-4.2 3 3 0 0 0 4.2 4.2z" /><path d="M14.2 9.8a3 3 0 0 1 4.2-4.2 3 3 0 0 1-4.2 4.2z" /><path d="M9.8 14.2a3 3 0 0 1-4.2 4.2 3 3 0 0 1 4.2-4.2z" /><path d="M14.2 14.2a3 3 0 0 0 4.2 4.2 3 3 0 0 0-4.2-4.2z" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.01a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.55h.01a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.01a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z" /></>,
  gift: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></>,
  key: <><path d="M21 2l-2 2m-7.6 7.6a5.5 5.5 0 1 1-7.8 7.8 5.5 5.5 0 0 1 7.8-7.8zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></>,
  layers: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></>,
  message: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.9-1L3 21l1.1-5.1a8.4 8.4 0 1 1 16.9-4.4z" />,
  minus: <path d="M5 12h14" />,
  moreVertical: <><circle cx="12" cy="5" r="0.5" /><circle cx="12" cy="12" r="0.5" /><circle cx="12" cy="19" r="0.5" /></>,
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>,
  music: <><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>,
  note: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" /></>,
  package: <><path d="M16.5 9.4L7.5 4.2" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.3 7L12 12l8.7-5" /><path d="M12 22V12" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  plane: <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />,
  plate: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  refresh: <><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10" /><path d="M20.5 15a9 9 0 0 1-14.9 3.4L1 14" /></>,
  rocket: <><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.8-2.1-.8-3 .8z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.6-6 11a22 22 0 0 1-4 2z" /><path d="M9 12H4s.6-3.3 2-4c1.6-.8 3 .5 3 3z" /><path d="M12 15v5s3.3-.6 4-2c.8-1.6-.5-3-3-3z" /></>,
  search: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></>,
  send: <><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  shoppingCart: <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></>,
  smartphone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  sparkle: <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2L12 3z" />,
  star: <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />,
  tag: <><path d="M20.6 13.4L11.5 2.3a1 1 0 0 0-.7-.3H3a1 1 0 0 0-1 1v7.8c0 .3.1.6.3.8l11 11.1a2 2 0 0 0 2.8 0l4.5-4.5a2 2 0 0 0 0-2.8z" /><path d="M7 7h.01" /></>,
  ticket: <><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" /><path d="M13 5v2" /><path d="M13 11v2" /><path d="M13 17v2" /></>,
  tools: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a4 4 0 0 0-5.7 0l-6.7 6.7" /><path d="M5 21a3 3 0 0 1-3-3 3 3 0 0 1 1-2.2l4-4 4.6 4.6-4 4a3 3 0 0 1-2.6.6z" /><path d="M20 20l-1-1" /></>,
  trophy: <><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v6a5 5 0 0 1-10 0V4z" /><path d="M17 5h3a2 2 0 0 1 2 2c0 2-2 3-4 3" /><path d="M7 5H4a2 2 0 0 0-2 2c0 2 2 3 4 3" /></>,
  truck: <><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
  utensils: <><path d="M3 2v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2" /><path d="M6 2v20" /><path d="M21 2c-2.2 0-4 2.5-4 6v4h2v10" /></>,
  user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>,
  wallet: <><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></>,
  wifi: <><path d="M5 12.6a9 9 0 0 1 14 0" /><path d="M8.5 15.8a5 5 0 0 1 7 0" /><path d="M12 19h.01" /></>,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a4 4 0 0 0-5.7 0L9.1 12.2a4 4 0 0 0-5.6 5.6l3.5-3.5 2.1 2.1-3.5 3.5a4 4 0 0 0 5.6-5.6l6.7-6.7a4 4 0 0 0 0 5.7l-3.8 3.8" />,
  x: <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>,
  zzz: <><path d="M4 12h6l-6 9h6" /><path d="M16 3h6l-6 9h6" /></>,
};

export function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 1.8, style, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0, ...style }}
      aria-hidden="true"
      {...props}>
      {P[name] || P.dot}
    </svg>
  );
}

export function iconFor(name) {
  return (props) => <Icon name={name} {...props} />;
}
