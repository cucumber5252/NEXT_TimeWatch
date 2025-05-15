// /models/ChatMessage.js
import mongoose from 'mongoose';

const chatMessageSchema = new mongoose.Schema({
    url: { type: String, required: true }, // 각 URL별로 구분하기 위한 필드
    userName: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.models.ChatMessage || mongoose.model('ChatMessage', chatMessageSchema, 'chats.forUrls');

export default ChatMessage;
