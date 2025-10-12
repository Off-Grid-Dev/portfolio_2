import DecoHeading from "../components/ui/DecoHeading";
import profilePicture from "/profile_pic.png";

const Home = () => {
  return (
    <div className="flex justify-evenly flex-wrap-reverse">
      <div>
        <DecoHeading />
        <div className="grid gap-3 text-right">
          <h2 className="text-lg font-semibold">Kenneth Jahnsen Collins</h2>
          <ul>
            <li>
              <span>skinnykdev@gmail.com</span>
            </li>
            <li>
              <a href="https://github.com/Off-Grid-Dev">github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kenneth-jahnsen-collins-36307a201/">
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          className="rounded-full aspect-square object-cover w-48"
          src={profilePicture}
          alt="image of skinnyK"
        />
      </div>
    </div>
  );
};

export default Home;
