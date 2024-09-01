import { useState } from "react";
import { Button } from "./Button";

export const Reviews = () => {
  const [activedBox, setActivedBox] = useState(true)
  const [activedLi, setActivedLi ]= useState("Li2" )
  const actived = () =>{
      setActivedBox((prev) => setActivedBox(!prev))
  }
  const PrimeiroBtn = () => {
    setActivedLi("Li1")
  }
  const SegundoBtn = () => {
    setActivedLi("Li2")

  }
  const TerceiroBtn = () => {
    setActivedLi("Li3")

  }
  const QuartoBtn = () => {
    setActivedLi("Li4")

  }
  return (
    <main id="review" >
      <div id="reviewHeader">
        <h1> What they’ve said </h1>
      </div>
      <button className="prev-btn" onClick={actived}>❮</button>
      <div id="reviews" className= {activedBox ? `moveleft ${activedLi}` : `moveright ${activedLi}`}>
        <section className="comment disappearMobile">
          <img src="\images\avatar-anisha.png" alt="Anisha avatar" />
          <h4>Anisha Li</h4>
          <p>
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </section>
        <section className="comment">
          <img src="\images\avatar-ali.png" alt="Ali Bravo avatar" />
          <h4>Ali Bravo</h4>
          <p>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </section>
        <section className="comment disappearMobile">
          <img src="\images\avatar-richard.png" alt="Richard avatar" />
          <h4>Richard Watts</h4>
          <p>
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </p>
        </section>
        <section className="comment " >
          <img src="\images\avatar-shanai.png" alt="Shara avatar" />
          <h4>Shanai Gough</h4>
          <p>
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </p>
        </section>
      </div>
      <button className="next-btn" onClick={actived}>❯</button>
      <ul className="dots">
        <li onClick={PrimeiroBtn} className= {activedLi == "Li1" &&  "LiActived"}></li>
        <li onClick={SegundoBtn}  className= {activedLi == "Li2" &&  "LiActived"}></li>
        <li onClick={TerceiroBtn}  className= {activedLi == "Li3" &&  "LiActived"}></li>
        <li onClick={QuartoBtn}  className= {activedLi == "Li4" &&  "LiActived"}></li>
      </ul>
      <Button />
    </main>
  );
};
