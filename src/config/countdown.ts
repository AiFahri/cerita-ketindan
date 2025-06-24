export const COUNTDOWN_CONFIG = {
  // Target launch date - format: "YYYY-MM-DDTHH:MM:SS"
  LAUNCH_DATE: "2025-06-28T10:00:00",

  // Website information
  SITE_INFO: {
    title: "Cerita Ketindan",
    subtitle: "Launching Soon",
    // description: "Segera hadir",
    // additionalInfo:
    //   "Website yang menyajikan informasi tentang sejarah desa, dll",
  },

  CONTACT: {
    phone: "+628123456789",
    instagram: "@pakdesadewa.berbakti",
    copyright: "Copyright © Sadewa 2025",
  },

  REDIRECT: {
    onComplete: "/home",
    autoRedirect: true,
  },
};

export const isCountdownCompleted = (): boolean => {
  const now = new Date().getTime();
  const target = new Date(COUNTDOWN_CONFIG.LAUNCH_DATE).getTime();
  return now >= target;
};

export const getTimeRemaining = () => {
  const now = new Date().getTime();
  const target = new Date(COUNTDOWN_CONFIG.LAUNCH_DATE).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    completed: false,
  };
};
