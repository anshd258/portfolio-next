/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.icons8.com'],
    },
    webpack: (config, { isServer }) => {
        // Modify the Webpack configuration for both client and server
        if (!isServer) {
          // For client-side code
          // Modify the Webpack configuration here
        } else {
          // For server-side code
          config.node = {
            global: true,
            __filename: true,
            __dirname: true,
          };
        }
    
        // Return the modified configuration
        return config;
      },
};

export default nextConfig;
