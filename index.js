import * as dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "./.env" });

const authRoom = process.env.RANDOM_PRIZE_AUTH.split(",");

export function YTMURLParser(msg) {
	if (msg.content.includes("music.youtube.com/watch?")) {
		const matchURL = msg.content.match(
			/(https:\/\/music\.youtube\.com\/watch\?[^\s]+)/
		);
		if (matchURL) {
			console.log("YouTube Music URL detected:", matchURL[1]);
			const normalYTLink = matchURL[1]
				.replace("music.youtube.com", "www.youtube.com")
				.match(/([?&]v=([^&]+))/);
			if (normalYTLink) {
				const finalYTLink = `https://www.youtube.com/watch?v=${normalYTLink[2]}`;
				msg.reply(
					`유튜브 뮤직 링크를 감지했습니다.\n일반 유튜브 링크를 드리겠습니다.\n\n${finalYTLink}`
				);
			}
		}
	}
}
