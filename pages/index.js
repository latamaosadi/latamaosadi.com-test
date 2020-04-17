import Layout from '../layouts/App';
import Emp from '../components/Emp';

export default function Index() {
  return (
    <Layout>
      <div className="px-6 py-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-md border-4 border-yellow-300 dark:border-yellow-500">
          <img
            src="https://res.cloudinary.com/latamaosadi-com/image/upload/v1586863340/avatar.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-6 leading-loose text-sm md:text-base">
          <h1 className="text-center text-lg md:text-2xl font-bold">
            👋 Hi, I'm <Emp text="Robert Latamaosadi" />.
          </h1>
          <p className="mt-6">
            Just call me <Emp text="Robert" />. I'm a Balinese Web Developer who
            lives in Bali, Indonesia since I were born. I love challenges and
            find possibilities of ways to solve them. I prefer to be involved in
            a full-stack development project, so much more that I can learn.
            Currently, I'm working as a fulltime front-end developer in{' '}
            <Emp text="Gotomalls" />, a digital mall directory startup based in
            Bali.
          </p>
          <p className="mt-4">
            I love to play video games, I grew up with a Super Nintendo
            Entertainment System console. Since then I've owned several consoles
            and handhelds, Sega Genesis, Gameboy Color, Playstation 1, Gameboy
            Advance, Playstation 2, Nintendo DS, Playstation 3, Nintendo 3DS,
            and now Nintendo Switch. I could play both seriously grinding RPG
            games, or some relaxed platformer games but I could never enjoy
            playing online multiplayer games unless it's a co-op game.
          </p>
          <p className="mt-4">
            I also love gardening and learn about Ancient Greek, Chinese and Japanese Philosophies in pursuit of a happy simple life.
          </p>
        </div>
      </div>
    </Layout>
  );
}
