interface DateTimeFormatOptions {
  day?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" |"long" | "short" | "narrow";
  year?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
}


const options: DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const currentDate = new Date();
export const formattedDate = currentDate.toLocaleString('ru-RU', options);
