/** @type {import('next').NextConfig} */
const path = require('path')



const nextConfig = {
    reactStrictMode: true,
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


