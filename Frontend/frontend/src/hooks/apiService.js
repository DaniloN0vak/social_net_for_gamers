import { sendMessage } from "../api/chatApi";

async function gifToFile(src) {
  try {
    const response = await fetch(src);
    const blob = await response.blob();
    return new File([blob], 'gif.gif', { type: blob.type });
  } catch (err) {
    console.error('Ошибка при загрузке gif:', err);
    return null;
  }
}

export async function send(chatId, userId, content = "", media = [], audio = null, gifUrl = "") {
  const formData = new FormData();
  formData.append("content", content);
  formData.append("userId", userId);

  media.forEach((item, index) => {
    formData.append(`media[${index}].file`, item.file);
    formData.append(`media[${index}].isBloored`, item.isBloored);
    formData.append(`media[${index}].name`, item.name);
    formData.append(`media[${index}].type`, item.type);
  });

  if (audio) {
    const index = media.length;
    formData.append(`media[${index}].file`, audio.file);
    formData.append(`media[${index}].isBloored`, false);
    formData.append(`media[${index}].name`, audio.name);
    formData.append(`media[${index}].type`, audio.type);
  }



  if (gifUrl) {
    const gifFile = await gifToFile(gifUrl);
    if (gifFile) {
      const index = media.length + (audio ? 1 : 0);
      console.log(index);
      formData.append(`media[${index}].file`, gifFile);
      formData.append(`media[${index}].isBloored`, false);
      formData.append(`media[${index}].name`, gifFile.name);
      formData.append(`media[${index}].type`, gifFile.type);
    }
  }
  


  try {
    const response = await sendMessage(chatId, formData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
    throw error;
  }
}
