import StylelintWebpackPlugin from 'stylelint-webpack-plugin'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./app/(app)/_config/i18n/index.ts')

const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{ protocol: 'https', hostname: '*' }]
    },
    webpack: (config) => {
        config.plugins.push(new StylelintWebpackPlugin())
        return config
    }
}

export default withNextIntl(nextConfig)
