const { cmd } = require("../command");
const { getep } = require("darksadasyt-anime");

cmd(
  {
    pattern: "animedetails",
    react: "🎭",
    desc: "Get Anime Details and Episodes",
    category: "anime",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    { from, quoted, body, isCmd, command, args, q, isGroup, sender, reply }
  ) => {
    try {
      if (!q) return reply("*Please provide an anime link.* 🎭");

      // Fetching the anime details
      const results = await getep(q);
      const { result, results: episodeList } = results;

      // Constructing the anime details message
      let detailsMessage = `🎬 *Anime Details for* ${result.title} 🎬\n\n`;
      detailsMessage += `📅 *Release Date*: ${result.date}\n`;
      detailsMessage += `⭐ *IMDb Rating*: ${result.imdb}\n`;
      detailsMessage += `🎥 *Total Episodes*: ${result.epishodes}\n`;
      detailsMessage += `🖼️ *Image*: ${result.image}\n\n`;

      detailsMessage += "🎬 *Episodes* 🎬\n\n";
      episodeList.forEach((episode, index) => {
        detailsMessage += `📺 Episode ${episode.episode} - 🔗 episode.php?${episode.url}\n`;
      });

      // Sending the anime details and episodes
      reply(detailsMessage);
    } catch (e) {
      console.error(e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);
