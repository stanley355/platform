// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

const scraperAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  const url = "https://www.amazon.com/gp/bestsellers/?ref_=navm_cs_bestsellers";
  await page.goto(url, { waitUntil: "domcontentloaded" });

  const html = await page.evaluate(() => {
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

  console.log(html);

  // const html:any = await page.evaluate(()=> document.body.innerHTML);
  await browser.close();

  res.send(html);
};

export default scraperAPI;
