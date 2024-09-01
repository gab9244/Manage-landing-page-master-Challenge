import { Button } from "./Button";

export const Main = () => {
  return (
    <main id="MainContent">
        <section id="LeftSide">
            <h1> Bring everyone together to build better products.</h1>
            <p> Manage makes it simple for software teams to plan day-to-day
            tasks while keeping the larger team goals in view.</p>
            <Button />
        </section>
        <section>
        <img src="\illustration-intro.svg" alt="" className="illustration"/>
        </section>
    </main>
  )
}
