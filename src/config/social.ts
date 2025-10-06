import { Rss } from "@lucide/astro";
import { Github, Mastodon, Discord } from "simple-icons-astro";

export const SOCIAL_LINKS = [
  { href: "https://github.com/myk42", label: "Myk on Github", icon: Github },
  { href: "https://mastodon.social/@myk42", label: "Myk on Mastodon", icon: Mastodon },
  { href: "https://discord.gg/DytVbZ5XPR", label: "OB1 Discord Server", icon: Discord },
  { href: "/rss.xml", label: "RSS Feed", icon: Rss }
];
