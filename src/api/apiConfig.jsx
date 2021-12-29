const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b3620fbed29214c0660c7f7c5177126e',
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    w200Image: (imgPath) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
};
export default apiConfig;
