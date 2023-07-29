/**Cho trước biến url lưu trữ URL cần rút gọn link. Viết chương trình hiển thị ra link sau khi rút gọn

Khi truy cập vào link rút gọn sẽ tự động chuyển về URL gốc

Tham khảo API sau để hoàn thiện: https://shrtco.de/docs */

const url = `https://www.youtube.com/watch?v=WICgZPU3YoM`;
const api = `https://api.shrtco.de/v2/shorten?url=`;

const getShortUrl = async function (link) {
  try {
    const response = await fetch(`${api}${link}`);
    const data = await response.json();
    console.log(data.result.short_link);
  } catch (e) {
    console.log(e);
  }
};

getShortUrl(url);
