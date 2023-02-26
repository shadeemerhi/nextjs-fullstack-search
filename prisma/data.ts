import { User } from "@prisma/client";

export const images = [
  "https://pbs.twimg.com/profile_images/1455257864126099463/qeQcRANk_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1237999775905189889/YMC3U_UO_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1623483088130170881/6zgPys29_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg",
];

export const fakeUsers: Array<Pick<User, "name" | "imageUrl">> = [
  {
    name: "Emma Martinez",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Mia Davis",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Olivia Lee",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Noah Kim",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Isabella Johnson",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Sophia Patel",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Ethan Lee",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Liam Davis",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Ava Moore",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Chloe Martinez",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Jackson Brown",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Alexander Harding",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Alexander Davis",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Emily Kim",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "William Johnson",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Aria Davis",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Lucas Kim",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Benjamin Patel",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Natalie Martinez",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Benjamin Brown",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
];

export const fakePostBodies = [
  "SpaceX just launched another rocket into space! We're one step closer to making life multi-planetary.",
  "The new Tesla Model S is going to blow your mind. It's like driving a spaceship on Earth.",
  "Neuralink just announced a breakthrough in brain-machine interfaces. We're closer than ever to merging with AI.",
  "Mars, here we come. SpaceX is working hard to establish a sustainable colony on the Red Planet.",
  "The future is electric. Tesla is leading the way with its revolutionary battery technology.",
  "I just tried a prototype of the new Tesla Roadster. It's so fast it'll make your head spin.",
  "We're living in a simulation. Or maybe not. Who knows?",
  "Artificial intelligence is the future. That's why I founded OpenAI.",
  "The Hyperloop is going to change transportation as we know it. Faster, cheaper, and more efficient.",
  "The boring company is digging tunnels underneath cities to alleviate traffic congestion. Let's make commuting fun again!",
  "I just landed on the moon. Just kidding, but wouldn't that be cool?",
  "Mars needs memes. Let's make sure to bring some good ones with us on our first mission.",
  "The future of energy is solar. That's why Tesla is investing heavily in solar technology.",
  "I just had a conversation with a robot, and it was more intelligent than some humans I know.",
  "The new Tesla Semi truck is going to revolutionize the transportation industry. Electric is the way to go.",
  "The Tesla Powerwall is the key to unlocking sustainable energy for everyone.",
  "We need to colonize Mars as a backup plan. We never know what could happen to Earth.",
  "The Tesla Model 3 is the best car ever made. Trust me, I'm Elon Musk.",
  "We need to invest in renewable energy sources to combat climate change. There's no planet B.",
  "The SpaceX Starship is going to take us to Mars and beyond. The sky is not the limit.",
  "The Boring Company flamethrower is a must-have for any survival kit. It's not a toy, though.",
  "The Tesla Roadster will go from 0 to 60 mph in 1.9 seconds. Let that sink in.",
  "Humans and AI can coexist peacefully. It's all about making sure the AI is aligned with our values.",
  "I'm convinced we're living in a computer simulation. The odds are too high that we're not.",
  "The Tesla Cybertruck is the most badass truck on the market. It's like driving a tank.",
  "I just launched a Tesla into space. Because why not?",
  "The future is going to be amazing. I can't wait to see what we'll achieve in the next few decades.",
  "Neuralink's brain implants are going to change the world. Imagine being able to download knowledge directly into your brain.",
  "The Tesla Model X is the safest SUV ever tested. We're serious about safety.",
  "We're going to create a self-sustaining city on Mars. It's not a question of if, but when.",
];
