// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import UserAgent from "user-agents";
import puppeteerExtra from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteerExtra.use(StealthPlugin());

const parseItemData = async (page: any) => {
  return await page.evaluate(() => {
    const imageParents: any = document.querySelectorAll(".a-button-text > img");
    const imgList = [...imageParents]
      .map((img: any) => {
        return img.src;
      })
      .filter((img: any) => img.includes("/I/"));

    const productTitle: any = document.querySelector("#productTitle");
    const rating: any = document.querySelector(".a-size-base .a-color-base");
    const ratingAmount: any = document.querySelector("#acrCustomerReviewText");
    const discountPercentage: any =
      document.querySelector(".savingsPercentage");
    const finalPrice: any = document.querySelector(
      ".priceToPay > span.a-offscreen"
    );
    const initialPrice: any = document.querySelector(
      ".a-text-price > span.a-offscreen"
    );

    return {
      imgList: imgList,
      title: productTitle?.innerText,
      rating: rating?.innerText,
      ratingAmount: ratingAmount?.innerText,
      discountPercentage: discountPercentage?.innerText,
      finalPrice: finalPrice?.innerText,
      initialPrice: initialPrice?.innerText,
    };
  });
};

const amazonItemAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch({ headless: true });

  const userAgent = new UserAgent();
  const browserObj = await puppeteerExtra.launch();
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

  const url = String(req.query.url);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  let data = await parseItemData(page);
  await browser.close();

  if (!data.title) {
    const newURL = url.replace(".com", ".com.au");
    await page.goto(newURL, { waitUntil: "domcontentloaded" });
    data = await parseItemData(page);
    await browser.close();
  }

  if (!data.title) {
    const newURL = url.replace(".com", ".sg");
    await page.goto(newURL, { waitUntil: "domcontentloaded" });
    data = await parseItemData(page);
    await browser.close();
  }

  res.send(data);
};

export default amazonItemAPI;
