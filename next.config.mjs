import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "mdx"],
  trailingSlash: true,
};

// Turbopack passes loader options across a worker boundary, so the MDX plugins
// have to be named as strings rather than imported functions.
const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-math", {}], ["remark-smartypants", {}]],
    rehypePlugins: [["rehype-katex", { strict: false }]],
  },
});

export default withMDX(nextConfig);
