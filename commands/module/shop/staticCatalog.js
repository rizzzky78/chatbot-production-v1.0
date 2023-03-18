const { herbsProduct } = require("../../../store/static/dataProduk");

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
  aliases: ["katalogsaya"],
  category: "admin",
  description: "Upload produk ke database katalog",
  waitMessage: "Mohon tunggu sebentar...",
  callback: async ({ client, msg, args, prefix }) => {
    let sections = [
      {
        title: "Suplemen / Vitamin Herbal",
        rows: [],
      },
      {
        title: "Bantuan",
        rows: [
          {
            title: "ppp",
            rowId: "ppp",
            description: "ppp",
          },
        ],
      },
    ];
    const dataHerbsProduct = herbsProduct.map(
      (val) => ({
        title: val.name,
        rowId: prefix + "getstaticproduct" + " " + val.id,
        description: val.price,
      }),
      {}
    );
    sections[0].rows.push(...dataHerbsProduct);

    let text =
      `*Teh Cici's Halal Mart*\n_Berdiri sejak didirikan..._\n\n` +
      `*Platform Sosial Media:*\n\n` +
      `Facebook\nhttps://www.facebook.com/ini_cuma_demo\n\n` +
      `Instagram\nhttps://www.instagram.com/cuma_demo\n\n` +
      `Tiktok\nhttps://www.tiktok.com/cumademo\n\n` +
      `*Platform Website Marketplace:*\n\n` +
      `Tokopedia\nhttps://www.tokopedia.com/cumademo\n\n` +
      `Shopee\nhttps://www.shopee.com/cumademo\n\n` +
      `Alamat Toko Offline:\n` +
      `Jl. Jalanin aja dulu, Rt 03/06, Desa Pesanggrahan, Kec. Kesugihan, Kab. Cilacap, Prov. Jateng\n\n\n` +
      `Website Official Store\nhttps://hni.net/\n\n`;

    return client
      .sendMessage(msg.from, {
        title: "Demo Katalog Produk",
        text,
        footer: "Klik tombol dibawah untuk membuka Katalog",
        buttonText: "Katalog Produk - Static",
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
