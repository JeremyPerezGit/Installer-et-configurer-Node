import "dotenv/config";
import { say } from "cowsay";

console.log(
  say({
    text: `My name is ${process.env.NAME} and i learn dev in WCS ${process.env.CAMPUS}`,
  })
);
