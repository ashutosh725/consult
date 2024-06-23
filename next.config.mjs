const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add file-loader for PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            outputPath: 'static/images/', // Adjust the output path as needed
            name: '[name].[ext]', // This will use the original file name
          },
        },
      ],
    });

    // Return the modified configuration
    return config;
  },
  env: {
    NEXT_PUBLIC_RAZORPAY_ID: process.env.RAZORPAY_ID,
  },
};

export default nextConfig;
