import { issueCard, issueId, issueInfo } from "./IssueCards.css";

const IssueCards = () => {
  return (
    <div className={issueCard}>
      <div className={issueInfo}>
        <div className={issueId}>
          <p>#Issue 1</p>
        </div>
        <p>Contributed by</p>
      </div>
      <p>Where are you now?</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga et
        pariatur! Sint quisquam eos quibusdam rerum quia provident, quidem in
        fuga eius eveniet impedit soluta corrupti odio voluptate iusto?
      </p>
    </div>
  );
};

export default IssueCards;
