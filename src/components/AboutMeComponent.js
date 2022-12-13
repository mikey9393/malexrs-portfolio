import profilePic from "../../public/assets/profilePic.jpg";

const AboutMeC = () => {
  return (
    <div>
      <div className="container">
        <h2 id="my-name" className="header white-text">
          Michael Robins
        </h2>
        <div className="center">
          <div className="image-container">
            <img id="profile-big" src={profilePic} alt="My smiley face" />
          </div>
        </div>
      </div>
      <main className="center white-text ">
        <h4>Who am I?</h4>
        <p>
          Be silent and listen: have you recognized your madness and do you
          admit it? Have you noticed that all your foundations are completely
          mired in madness? Do you not want to recognize your madness and
          welcome it in a friendly manner? You wanted to accept everything. So
          accept madness too. Let the light of your madness shine, and it will
          suddenly dawn on you.
        </p>
        <h4>Why Sofware Devolpement?</h4>
        <p>
          Madness is not to be despised and not to be feared, but instead you
          should give it life...If you want to find paths, you should also not
          spurn madness, since it makes up such a great part of your nature...Be
          glad that you can recognize it, for you will thus avoid becoming its
          victim.
        </p>
        <h4>Goals and ambitions</h4>
        <p>
          Madness is a special form of the spirit and clings to all teachings
          and philosophies, but even more to daily life, since life itself is
          full of craziness and at bottom utterly illogical. Man strives toward
          reason only so that he can make rules for himself. Life itself has no
          rules. That is its mystery and its unknown law. What you call
          knowledge is an attempt to impose something comprehensible on life.
        </p>
      </main>
      <footer>
        <address>{/* insert Link components */}</address>
      </footer>
    </div>
  );
};
export default AboutMeC;
