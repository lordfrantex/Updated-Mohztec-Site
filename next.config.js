/** @type {import('next').NextConfig} */
const path = require('path')



const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
    }
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },



    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',

            },
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com',

            },

        ],
    },
}

module.exports = nextConfig


