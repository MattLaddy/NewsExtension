const newsKeywords = [
  "news", "article", "report", "journal", "media", "headline", "breaking", "update", "coverage", "bulletin",
  "press", "gazette", "dispatch", "chronicle", "edition", "feature", "opinion", "analysis", "exclusive", "interview",
  "investigation", "review", "story", "summary", "reporter", "correspondent", "editor", "journalist", "publication",
  "magazine", "newsletter", "newspaper", "column", "broadcast", "telecast", "newscast", "network", "station",
  "channel", "coverage", "television", "radio", "web", "online", "site", "portal", "blog", "vlog", "post", "feed",
  "wire", "agency", "source", "breaking news", "latest news", "live update", "CNN", "Fox News", "BBC", "Reuters",
  "Al Jazeera", "MSNBC", "ABC News", "CBS News", "NBC News", "Sky News", "HuffPost", "The Guardian", "The New York Times",
  "The Washington Post", "The Wall Street Journal", "USA Today", "Financial Times", "Bloomberg", "Forbes", "Time",
  "Newsweek", "Business Insider", "NPR", "Associated Press", "Politico", "Axios", "BuzzFeed News", "The Independent",
  "The Times", "The Sunday Times", "The Daily Telegraph", "The Sun", "The Mirror", "The Express", "The Mail", "The Observer",
  "The Spectator", "The Economist", "Scientific American", "New Scientist", "Nature", "Science", "National Geographic",
  "Smithsonian", "Wired", "TechCrunch", "Mashable", "Engadget", "The Verge", "Ars Technica", "Gizmodo", "CNET", "ZDNet",
  "Digital Trends", "VentureBeat", "Vox", "Slate", "Salon", "Jezebel", "Gawker", "The Atlantic", "New York Magazine",
  "Vanity Fair", "Harper's Magazine", "Esquire", "GQ", "Men's Journal", "Men's Health", "Women's Health", "Cosmopolitan",
  "Elle", "Vogue", "Harper's Bazaar", "InStyle", "Marie Claire", "Glamour", "Shape", "Self", "Redbook", "Good Housekeeping",
  "People", "Us Weekly", "Entertainment Weekly", "Rolling Stone", "Billboard", "Spin", "Complex", "Pitchfork", "MTV News",
  "VH1 News", "E! News", "TMZ", "Perez Hilton", "Hollywood Reporter", "Variety", "Deadline", "IndieWire", "The Wrap",
  "The Root", "The Grio", "BET News", "HipHopDX", "XXL", "Vibe", "The Source", "DJBooth", "Rap-Up", "AllHipHop",
  "HotNewHipHop", "Stereogum", "Consequence of Sound", "BrooklynVegan", "PopMatters", "SPIN", "NME", "Pitchfork",
  "Stereogum", "Under the Radar", "Drowned in Sound", "Tiny Mix Tapes", "Paste", "Prefix", "The Fader", "Alternative Press",
  "Kerrang!", "Rock Sound", "Loudwire", "Metal Injection", "MetalSucks", "Blabbermouth", "Revolver", "Decibel", "Terrorizer",
  "Punknews", "Dying Scene", "Absolute Punk", "Punk Rock Theory", "Riot Fest", "Substream Magazine", "The Punk Site",
  "The 405", "Line of Best Fit", "DIY Magazine", "Clash", "Loud and Quiet", "Lemonade Magazine", "GoldFlakePaint",
  "So Young Magazine", "Secret Meeting", "God Is in the TV", "Far Out Magazine", "The Quietus", "Fact Magazine", "Resident Advisor",
  "Mixmag", "DJ Mag", "RA", "XLR8R", "Thump", "Boiler Room", "Beatport", "Consequence of Sound", "Exclaim!", "PopMatters",
  "Stereogum", "Pitchfork", "The AV Club", "Rolling Stone", "Spin", "NME", "Uncut", "Mojo", "Q", "Classic Rock", "Prog",
  "Louder", "Ultimate Classic Rock", "TeamRock", "Metal Hammer", "Prog Magazine", "Kerrang!", "Rock Sound", "Loudwire",
  "Metal Injection", "MetalSucks", "Blabbermouth", "Revolver", "Decibel", "Terrorizer", "Punknews", "Dying Scene",
  "Absolute Punk", "Punk Rock Theory", "Riot Fest", "Substream Magazine", "The Punk Site", "The 405", "Line of Best Fit",
  "DIY Magazine", "Clash", "Loud and Quiet", "Lemonade Magazine", "GoldFlakePaint", "So Young Magazine", "Secret Meeting",
  "God Is in the TV", "Far Out Magazine", "The Quietus", "Fact Magazine", "Resident Advisor", "Mixmag", "DJ Mag", "RA",
  "XLR8R", "Thump", "Boiler Room", "Beatport", "Consequence of Sound", "Exclaim!", "PopMatters", "Stereogum", "Pitchfork",
  "The AV Club", "Rolling Stone", "Spin", "NME", "Uncut", "Mojo", "Q", "Classic Rock", "Prog", "Louder", "Ultimate Classic Rock",
  "TeamRock", "Metal Hammer", "Prog Magazine", "Kerrang!", "Rock Sound", "Loudwire", "Metal Injection", "MetalSucks",
  "Blabbermouth", "Revolver", "Decibel", "Terrorizer", "Punknews", "Dying Scene", "Absolute Punk", "Punk Rock Theory",
  "Riot Fest", "Substream Magazine", "The Punk Site", "The 405", "Line of Best Fit", "DIY Magazine", "Clash", "Loud and Quiet",
  "Lemonade Magazine", "GoldFlakePaint", "So Young Magazine", "Secret Meeting", "God Is in the TV", "Far Out Magazine",
  "The Quietus", "Fact Magazine", "Resident Advisor", "Mixmag", "DJ Mag", "RA", "XLR8R", "Thump", "Boiler Room", "Beatport",
  "Consequence of Sound", "Exclaim!", "PopMatters", "Stereogum", "Pitchfork", "The AV Club", "Rolling Stone", "Spin",
  "NME", "Uncut", "Mojo", "Q", "Classic Rock", "Prog", "Louder", "Ultimate Classic Rock", "TeamRock", "Metal Hammer",
  "Prog Magazine", "Kerrang!", "Rock Sound", "Loudwire", "Metal Injection", "MetalSucks", "Blabbermouth", "Revolver",
  "Decibel", "Terrorizer", "Punknews", "Dying Scene", "Absolute Punk", "Punk Rock Theory", "Riot Fest", "Substream Magazine",
  "The Punk Site", "The 405", "Line of Best Fit", "DIY Magazine", "Clash", "Loud and Quiet", "Lemonade Magazine",
  "GoldFlakePaint", "So Young Magazine", "Secret Meeting", "God Is in the TV", "Far Out Magazine", "The Quietus",
  "Fact Magazine", "Resident Advisor", "Mixmag", "DJ Mag", "RA", "XLR8R", "Thump", "Boiler Room", "Beatport",
  "Consequence of Sound", "Exclaim!", "PopMatters", "Stereogum", "Pitchfork", "The AV Club", "Rolling Stone", "Spin",
  "NME", "Uncut", "Mojo", "Q", "Classic Rock", "Prog", "Louder", "Ultimate Classic Rock", "TeamRock", "Metal Hammer",
  "Prog Magazine", "Kerrang!", "Rock Sound", "Loudwire", "Metal Injection", "MetalSucks", "Blabbermouth", "Revolver",
  "Decibel", "Terrorizer", "Punknews", "Dying Scene", "Absolute Punk", "Punk Rock Theory", "Riot Fest", "Substream Magazine",
  "The Punk Site", "The 405", "Line of Best Fit", "DIY Magazine", "Clash", "Loud and Quiet", "Lemonade Magazine",
  "GoldFlakePaint", "So Young Magazine", "Secret Meeting", "God Is in the TV", "Far Out Magazine", "The Quietus",
  "Fact Magazine", "Resident Advisor", "Mixmag", "DJ Mag", "RA", "XLR8R", "Thump", "Boiler Room", "Beatport"
];

const newsDomains = [
  "cnn.com", "foxnews.com", "bbc.com", "reuters.com", "aljazeera.com", "msnbc.com", "abcnews.com", "cbsnews.com",
  "nbcnews.com", "sky.com", "huffpost.com", "theguardian.com", "nytimes.com", "washingtonpost.com", "wsj.com",
  "usatoday.com", "ft.com", "bloomberg.com", "forbes.com", "time.com", "newsweek.com", "businessinsider.com", "npr.org",
  "apnews.com", "politico.com", "axios.com", "buzzfeednews.com", "independent.co.uk", "thetimes.co.uk", "sundaytimes.co.uk",
  "telegraph.co.uk", "thesun.co.uk", "mirror.co.uk", "express.co.uk", "dailymail.co.uk", "observer.co.uk", "spectator.co.uk",
  "economist.com", "scientificamerican.com", "newscientist.com", "nature.com", "sciencemag.org", "nationalgeographic.com",
  "smithsonianmag.com", "wired.com", "techcrunch.com", "mashable.com", "engadget.com", "theverge.com", "arstechnica.com",
  "gizmodo.com", "cnet.com", "zdnet.com", "digitaltrends.com", "venturebeat.com", "vox.com", "slate.com", "salon.com",
  "jezebel.com", "gawker.com", "theatlantic.com", "nymag.com", "vanityfair.com", "harpers.org", "esquire.com", "gq.com",
  "mensjournal.com", "menshealth.com", "womenshealthmag.com", "cosmopolitan.com", "elle.com", "vogue.com", "harpersbazaar.com",
  "instyle.com", "marieclaire.com", "glamour.com", "shape.com", "self.com", "redbookmag.com", "goodhousekeeping.com",
  "people.com", "usmagazine.com", "ew.com", "rollingstone.com", "billboard.com", "spin.com", "complex.com", "pitchfork.com",
  "mtv.com/news", "vh1.com/news", "eonline.com/news", "tmz.com", "perezhilton.com", "hollywoodreporter.com", "variety.com",
  "deadline.com", "indiewire.com", "thewrap.com", "theroot.com", "thegrio.com", "bet.com/news", "hiphopdx.com", "xxlmag.com",
  "vibe.com", "thesource.com", "djbooth.net", "rap-up.com", "allhiphop.com", "hotnewhiphop.com", "stereogum.com",
  "consequenceofsound.net", "brooklynvegan.com", "popmatters.com", "nme.com", "ultimateclassicrock.com", "teamrock.com",
  "loudwire.com", "metalhammer.com", "metalobsession.net", "blabbermouth.net", "revolvermag.com", "decibelmagazine.com",
  "terrorizer.com", "punknews.org", "dyingscene.com", "absolutepunk.net", "punkrocktheory.com", "riotfest.org",
  "substreammagazine.com", "thepunksite.com", "thelineofbestfit.com", "diymag.com", "clashmusic.com", "loudandquiet.com",
  "lemonademagazine.net", "goldflakepaint.co.uk", "soyoungmagazine.com", "secretmeeting.co.uk", "godisinthetvzine.co.uk",
  "faroutmagazine.co.uk", "thequietus.com", "factmag.com", "residentadvisor.net", "mixmag.net", "djmag.com", "ra.co",
  "xlr8r.com", "thump.vice.com", "boilerroom.tv", "beatport.com", "exclaim.ca", "thefader.com", "alternativemonster.com",
  "drownedinsound.com", "tinymixtapes.com", "paste.com", "prefixmag.com", "thefader.com", "loudandquiet.com", "clashmusic.com",
  "goldflakepaint.co.uk", "soyoungmagazine.com", "secretmeeting.co.uk", "godisinthetvzine.co.uk", "faroutmagazine.co.uk",
  "thequietus.com", "factmag.com", "residentadvisor.net", "mixmag.net", "djmag.com", "ra.co", "xlr8r.com", "thump.vice.com",
  "boilerroom.tv", "beatport.com", "exclaim.ca", "thefader.com", "alternativemonster.com", "drownedinsound.com",
  "tinymixtapes.com", "paste.com", "prefixmag.com"
];


function isNewsArticle(url) {
  const urlObj = new URL(url);
  const domain = urlObj.hostname.replace('www.', '');

  // Add more search engines to the list
  const isSearchEngine = [
    'google.com', 'bing.com', 'yahoo.com', 'duckduckgo.com', 'baidu.com', 'ask.com', 'aol.com',
    'wolframalpha.com', 'yandex.com', 'ecosia.org', 'naver.com', 'seznam.cz', 'qwant.com'
  ];

  const isSearchResult = urlObj.pathname.includes('search') || urlObj.searchParams.has('q');

  if (isSearchEngine.includes(domain) && isSearchResult) {
    return false;
  }

  // Check for specific meta tags or elements that indicate a news article
  const isArticle = document.querySelector('article') !== null ||
                    document.querySelector('meta[property="og:type"][content="article"]') !== null;

  // Return true if it's a news domain and contains article indicators
  return newsDomains.includes(domain) && isArticle;
}

if (isNewsArticle(window.location.href)) {
  chrome.runtime.sendMessage({ action: "showPopup" });
}