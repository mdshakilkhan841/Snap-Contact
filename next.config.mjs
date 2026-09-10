/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/new-portfolio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/new-portfolio/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/new-portfolio/portfolio',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/new-portfolio/strength',
        destination: '/strength',
        permanent: true,
      },
      {
        source: '/new-portfolio/contact',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
