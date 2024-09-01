export const About = () => {
  return (
    <main id="aboutContent">
      <section id="leftSide">
        <h1>What’s different about Manage?</h1>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </section>

      <section id="rightBoxes">
          <section className="rightSide">
            <div className="rightSideHeader">
              <div className="rightSideIcon">01</div>
              <h3> Track company-wide progress</h3>
            </div>
            <p>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </section>
          <section className="rightSide">
            <div  className="rightSideHeader">
              <div className="rightSideIcon">02</div>
              <h3>Advanced built-in reports</h3>
            </div>
            <p>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </section>
          <section className="rightSide">
            <div  className="rightSideHeader">
              <div className="rightSideIcon">03</div>
              <h3>Everything you need in one place</h3>
            </div>
            <p>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </section>
       
      </section>
      <img src="\bg-tablet-pattern.svg" alt="" id="tablePatternMiddle" />
    </main>
  );
};
