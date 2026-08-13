export const venueBadge = (venue = "") => {
  if (/bioRxiv/i.test(venue)) return "bioRxiv";
  if (/International Solid-State Circuits Conference|\bISSCC\b/i.test(venue)) return "ISSCC";
  if (/Symposium on VLSI Technology and Circuits|\bVLSI\b/i.test(venue)) return "VLSI";
  if (/Custom Integrated Circuits Conference|\bCICC\b/i.test(venue)) return "CICC";
  if (/Asian Solid-State Circuits Conference|\bA[-– ]?SSCC\b|\bASSCC\b/i.test(venue)) return "A-SSCC";
  if (/European Solid-State Circuits Conference|\bESSCIRC\b|\bESSERC\b/i.test(venue)) return "ESSCIRC";
  if (/International Conference on Electronics, Information, and Communication|\bICEIC\b/i.test(venue)) return "ICEIC";
  if (/Journal of Solid-State Circuits/i.test(venue)) return "JSSC";
  if (/Transactions on Circuits and Systems II|\bTCAS[-– ]?II\b/i.test(venue)) return "TCAS-II";
  if (/Transactions on Circuits and Systems I(?!I)|\bTCAS[-– ]?I\b/i.test(venue)) return "TCAS-I";
  if (/Solid-State Circuits Letters/i.test(venue)) return "L-SSC";
  if (/Open Journal of (?:the )?Solid-State Circuits Society|\bOJ[-– ]?SSCS\b/i.test(venue)) return "OJ-SSCS";
  if (/Springer/i.test(venue)) return "Springer";
  const acronym = venue.match(/\(([A-Z][A-Z0-9.-]{1,12})\)/)?.[1];
  return acronym ?? "";
};

export const conferenceTier = (venue = "") => {
  if (/\bISSCC\b|International Solid-State Circuits Conference|\bVLSI\b|Symposium on VLSI/i.test(venue))
    return "Top-tier";
  if (
    /\bCICC\b|Custom Integrated Circuits Conference|\bA[-– ]?SSCC\b|\bASSCC\b|Asian Solid-State Circuits Conference|\bESSCIRC\b|\bESSERC\b|European Solid-State Circuits Conference/i.test(
      venue,
    )
  )
    return "Major";
  return "";
};

export const journalTier = (venue = "") => {
  if (/\bJSSC\b|Journal of Solid-State Circuits|\bTCAS[-– ]?I\b|Transactions on Circuits and Systems I(?!I)/i.test(venue))
    return "Top-tier";
  if (
    /\bTCAS[-– ]?II\b|Transactions on Circuits and Systems II|\bL[-– ]?SSC\b|Solid-State Circuits Letters/i.test(
      venue,
    )
  )
    return "Major";
  return "";
};
