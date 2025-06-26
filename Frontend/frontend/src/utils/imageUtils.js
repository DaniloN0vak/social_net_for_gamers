const serverUrl = process.env.REACT_APP_API_URL;

export async function sortImageUrlsByAspectRatio(media) {
  const loadedImages = await Promise.all(
    media.map(medium =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = serverUrl + medium.src;

        img.onload = () => resolve({
          src: serverUrl + medium.src,
          width: img.naturalWidth,
          height: img.naturalHeight,
          ratio: img.naturalWidth / img.naturalHeight,
          isBloored: medium.isBloored
        });

        img.onerror = () => {
          console.warn(`Ошибка загрузки изображения: ${serverUrl + medium.src}`);
          resolve(null);
        };
      })
    )
  );

  const validImages = loadedImages.filter(img => img !== null);

  validImages.sort((a, b) => a.ratio -  b.ratio);

  return validImages;
}
