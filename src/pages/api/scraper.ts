// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import UserAgent from "user-agents";
import puppeteerExtra from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteerExtra.use(StealthPlugin());

const scraperAPI = async (req: NextApiRequest, res: NextApiResponse) => {
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

  const url =
    "https://www.amazon.com/dp/B00902X7L8/ref=sspa_dk_detail_3?pd_rd_i=B00902X7L8&pd_rd_w=ObrKa&content-id=amzn1.sym.eb7c1ac5-7c51-4df5-ba34-ca810f1f119a&pf_rd_p=eb7c1ac5-7c51-4df5-ba34-ca810f1f119a&pf_rd_r=93N402YDPQKMY1VW8DXK&pd_rd_wg=SEKRW&pd_rd_r=c7a01b1c-c637-4c0d-981d-160a1f3963dd&s=home-garden&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1";
  const newURL = url.replace(".com", ".in");
  await page.goto(newURL, { waitUntil: "domcontentloaded" });

  const html = await page.evaluate(() => {
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

  await browser.close();

  res.send(html);
};

export default scraperAPI;
