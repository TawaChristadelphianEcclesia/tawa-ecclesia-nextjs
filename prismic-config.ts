// const Prismic = require("@prismicio/client");
import Prismic from "@prismicio/client";
export const apiEndpoint = "https://tawa-website-poc.prismic.io/api/v2";
// todo - look into req object
export const Client = Prismic.client(apiEndpoint);