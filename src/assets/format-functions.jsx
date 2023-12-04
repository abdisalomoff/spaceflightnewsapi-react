  // Datani mos kelgan formatga o'zgartirish
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
  
    const timeDifference = currentDate - date;
  
    if (timeDifference < 60 * 1000) {
      return Math.floor(timeDifference / 1000) + 's';
    } else if (timeDifference < 60 * 60 * 1000) {
      return Math.floor(timeDifference / (60 * 1000)) + 'm';
    } else if (timeDifference < 24 * 60 * 60 * 1000) {
      return Math.floor(timeDifference / (60 * 60 * 1000)) + 'h';
    } else if (currentDate.getFullYear() === date.getFullYear()) {
      /* Faqat oy va sana kelsa, yani ayni paytdagi yilda tweet qilingan bo'lsa */
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } else {
      /* Boshqa yil */
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };
    // End
  


// Tweet textni ichidagi kelib qolgan urlni linkka aylantirish   
export const formatLinkTweetText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
  
    return text.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
  };
    // End