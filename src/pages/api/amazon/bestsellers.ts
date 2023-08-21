// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import UserAgent from "user-agents";
import puppeteerExtra from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteerExtra.use(StealthPlugin());

const parseBestsellerPage = async (page: any) => {
  return await page.evaluate(() => {
    const parents: any = document.querySelectorAll(
      ".zg-carousel-general-faceout"
    );

    return [...parents].map((el: any) => {
      const link: any = el.querySelector(".a-link-normal");
      const img: any = el.querySelector(".a-dynamic-image");
      const soldAmount: any = el.querySelector(".a-size-small");
      const price: any = el.querySelector(".a-size-base > span");
      return {
        url: link.href,
        imgSrc: img.src,
        imgAlt: img.alt,
        soldAmount: soldAmount.innerText,
        price: price.innerText,
      };
    });
  });
};

const amazonBestSellerAPI = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const browser = await puppeteer.launch();
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

  const url = "https://www.amazon.com/gp/bestsellers/";
  await page.goto(url, { waitUntil: "domcontentloaded" });
  let data: any = await parseBestsellerPage(page);
  console.log(data);
  await browser.close();

  if (data.length < 3) {
    const newURL = url.replace(".com", ".com.au");
    await page.goto(newURL, { waitUntil: "domcontentloaded" });
    data = await parseBestsellerPage(page);
    await browser.close();
  }

  if (data.length < 3) {
    const newURL = url.replace(".com", ".sg");
    await page.goto(newURL, { waitUntil: "domcontentloaded" });
    data = await parseBestsellerPage(page);
    await browser.close();
  }

  res.send(data);
};

export default amazonBestSellerAPI;
