const token = '1563558743:AAHDwVSiAU1w5XFE5OHm3meUJYmizJGu8m0';
const chatId = '-1001441002138';
function sendinfo() {
    const isBrowser = navigator.userAgent.toLowerCase();
    const message = `Browser & device: \n${isBrowser}\n\nLink: ${window.location.href}`;

    $.ajax({
        type: 'POST',
        url: `https://api.telegram.org/bot${token}/sendMessage`,
        data: {
            chat_id: chatId,
            text: message,
            parse_mode: 'html',
        },
    });
}