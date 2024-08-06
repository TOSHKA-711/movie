const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '537ed1ae132f4201b1843b44852a01d0',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;