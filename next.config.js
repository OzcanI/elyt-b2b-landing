/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    async rewrites() {
        return [
            {
                source: '/test/:path*',
                destination: `https://api.elyt.net/:path*/`
                //destination: `https://api-dev.elyt.dev/:path*`
            }
        ];
      },
}

module.exports = nextConfig
