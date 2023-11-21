import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com/", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere iure dolor voluptatum in facilis vitae sequi labore ea, dignissimos nobis, commodi hic quibusdam deleniti quidem neque earum veniam natus.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam excepturi iusto quo quas inventore quam sint vel fuga perspiciatis tempora, omnis, soluta, eligendi quod et esse nihil numquam. Illum.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur deserunt ut cumque eligendi id odio est facilis quisquam hic officiis magni veritatis optio laborum, perferendis minima. Perferendis, exercitationem quibusdam.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nam, exercitationem quae expedita tenetur cupiditate magnam quos minus facere totam dignissimos in officia fuga tempora, harum nesciunt illo assumenda veniam?",
    location: "China",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 11th, 2020",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maiores, pariatur consequuntur fuga dicta cum excepturi aperiam natus expedita inventore adipisci vero voluptates rerum eum architecto tempora corrupti placeat? Rem.",
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut, illum reiciendis facere ipsa repudiandae ipsum hic, quasi molestias at incidunt sapiente in. Magni, qui iste consectetur ut libero odio?",
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nam, exercitationem quae expedita tenetur cupiditate magnam quos minus facere totam dignissimos in officia fuga tempora, harum nesciunt illo assumenda veniam?",
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
