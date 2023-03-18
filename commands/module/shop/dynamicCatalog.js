const Admin = require("@libs/controllers/shopHandler");
const { makeSectionProducts } = require("../../../libs/functions/myFunc");
const { infoMarketplace } = require("../../../config/marketplace");
const { metaData } = require("../../../config/global");

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
  aliases: ["upload", "uploadproduk"],
  category: "admin",
  description: "Upload produk ke database katalog",
  waitMessage: "Mohon tunggu sebentar...",
  cooldown: metaData.cooldownsCommand.product,
  callback: async ({ client, msg }) => {
    const DataProduct = await Admin.getAllProduct();

    let sections = [
      {
        title: "Suplemen / Vitamin Herbal",
        rows: [],
      },
    ];
    sections[0].rows.push(...makeSectionProducts(DataProduct));

    return client
      .sendMessage(msg.from, {
        title: "Demo Katalog Produk",
        text: infoMarketplace,
        footer: "Klik tombol dibawah untuk membuka Katalog",
        buttonText: "Katalog Produk - Dynamic",
        sections,
        viewOnce: true,
        mentions: [msg.sender],
      })
      .catch((error) => {
        console.error(error);
        return msg.reply("Terjadi Error!\n\n", JSON.stringify(error, null, 2));
      });
  },
};
