import { getAnalytics, logEvent } from "firebase/analytics";

export const sendFirebaseEvent = (name: string, param: any) => {
  if (process.env.NEXT_PUBLIC_APP_ENV !== "develop") {
    const analytics = getAnalytics();
    logEvent(analytics, name, param);
  }
};
