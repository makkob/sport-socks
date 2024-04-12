// 'use server'
// import axios from 'axios'

// const {TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID }= process.env

// export async function sendTelegram(name, phone){
//     try {
     
//       axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&parse_mode=HTML&text=${name}%0A${phone}`);
//       } catch (error) {
//         console.error('Error sending Telegram message:', error.message);
//       }
// }