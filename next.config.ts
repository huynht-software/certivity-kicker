// next.config.ts
import withPWA from 'next-pwa'

const withPWAFn = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

export default withPWAFn({
  reactStrictMode: true,
})
