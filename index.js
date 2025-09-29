// index.js
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv"



dotenv.config({path:'./.env'}); // load .env file


console.log(process.env.BOT_TOKEN);

// Replace with your BotFather token
const TELEGRAM_TOKEN = process.env.BOT_TOKEN;

// Create bot with polling enabled
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Listen for messages
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const userText = msg.text;

  // Reply back
  bot.sendMessage(chatId, `You said: ${userText}`);
});

// You can also add commands
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  bot.sendMessage(chatId, "👋 Hello! this is a steezcodes bot.");
});

console.log("🤖 Bot is running with polling...");
