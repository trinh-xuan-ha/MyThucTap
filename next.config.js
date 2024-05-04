module.exports = {
    images: {
        domains: ['indexsearch.sgp1.digitaloceanspaces.com'],
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ];
      },
};