// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import UserAgent from "user-agents";
import puppeteerExtra from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteerExtra.use(StealthPlugin());

const parseSearchData = async (page: any) => {
  return await page.evaluate(() => {
    const parents: any = document.querySelectorAll(".s-card-container");
    const elements = [...parents].map((el: any) => {
      const img = el.querySelector("img");
      const title = el.querySelector("h2");
      const rating = el.querySelector(".a-size-base");
      const price = el.querySelector(".a-offscreen");
      const link = el.querySelector("a");

      return {
        imgSrc: img?.src,
        imgAlt: img?.alt,
        title: title?.innerText,
        rating: rating?.innerText,
        price: price?.innerText.replace("\n", ""),
        link: link?.href,
      };
    });

    return elements;
  });
};

const amazonSearchAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch({ headless: true });

  const userAgent = new UserAgent();
  const browserObj = await puppeteerExtra.launch({
    headless: true,
    executablePath: process.env.NEXT_PUBLIC_APP_ENV !== "develop" ?  "/usr/bin/chromium" : "",
    args: ["--no-sandbox"],
  });
  const page = await browserObj.newPage();
  page.setUserAgent(userAgent.random().toString());
  await page.setViewport({
    width: 1920 + Math.floor(Math.random() * 100),
    height: 3000 + Math.floor(Math.random() * 100),
    deviceScaleFactor: 1,
    hasTouch: false,
    isLandscape: false,
    isMobile: false,
  });

  const url = String("https://amazon.com/s?k=" + req.query.keywords);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  let data = await parseSearchData(page);
  await browser.close();

  if (data.length < 3) {
    const newURL = url.replace(".com", ".com.au");
    await page.goto(newURL, { waitUntil: "domcontentloaded" });
    data = await parseSearchData(page);
    await browser.close();
  }

  if (data.length < 3) {
    const newURL = url.replace(".com", ".sg");
    await page.goto(newURL, { waitUntil: "domcontentloaded" });
    data = await parseSearchData(page);
    await browser.close();
  }

  res.send(data);
};

export default amazonSearchAPI;
