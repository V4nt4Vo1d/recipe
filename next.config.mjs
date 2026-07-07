/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the whole site can be hosted on GitHub Pages
  // (served from the root of a user site or a custom domain).
  output: 'export',
  // Set NEXT_BASE_PATH in GitHub Actions if deploying to a project page
  // e.g. NEXT_BASE_PATH=/recipes for username.github.io/recipes
  basePath: process.env.NEXT_BASE_PATH ?? '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
