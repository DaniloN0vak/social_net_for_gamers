export async function sortImageUrlsByAspectRatio(urls) {
  const loadedImages = await Promise.all(
    urls.map(src =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;

        img.onload = () => resolve({
          src,
          width: img.naturalWidth,
          height: img.naturalHeight,
          ratio: img.naturalWidth / img.naturalHeight,
        });

        img.onerror = () => {
          console.warn(`Ошибка загрузки изображения: ${src}`);
          resolve(null);
        };
      })
    )
  );

  const validImages = loadedImages.filter(img => img !== null);

  validImages.sort((a, b) => a.ratio -  b.ratio);

  return validImages;
}
