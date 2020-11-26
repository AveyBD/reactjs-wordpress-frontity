const settings = {
  name: "theme-goiblas",
  state: {
    frontity: {
      url: "https://ddeb.me",
      title: "যখন যেমন ইচ্ছে️ আমার খাতা",
      description:
        "👋! Soy Jesús Olazagoitia, En este blog encontrarás 🔮 artículos sobre desarrollo WordPress con JavaScript, 🏗️ creación de bloques para Gutenberg, ⚛️ React y mis expericias 🤪 como desarrollador Frontend",
      lang: "en",
      hero: {
        content:
          "👋 যদি কখনো হারাই, খুঁজে নিও আমায় পাহাড়ে আর লোকগানে। ",
        cta: {
          content: "আরো জানবেন?",
          link: "/about/"
        }
      },
      author: {
        name: "Debashish Das",
        link: "/about/"
      }
    }
  },
  packages: [
    {
      name: "frontity-goiblas-blog",
      state: {
        theme: {
          menu: [
            ["ব্লগ", "/"],
            ["Portfolio", "/proyectos/"],
            ["কে?", "/sobre-mi/"]
          ]
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://public-api.wordpress.com/wp/v2/sites/debashishdab.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "goiblas-disqus-comments"
  ]
};

export default settings;
