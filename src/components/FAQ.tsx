import FAQItems from "./FAQItems";

const FAQ = () => {
  // incase we need to add more questions
  const faqQuestions = [
    { title: "What is Uveryderiv?", answer: "answer to question" },
    { title: "So is this an NFT marketplace?", answer: "answer to question" },
    { title: "Why Uveryderiv?", answer: "answer to question" },
    { title: "What are Guilds?", answer: "answer to question" },
    { title: "What are Issues?", answer: "answer to question" },
  ];

  return (
    <div className=" pt-8 flex flex-col  place-items-center">
      <p className=" font-bebas text-6xl">FAQ</p>
      <div className=" flex flex-col w-[46rem] items-center mt-8">
        {faqQuestions.map((question) => (
          <FAQItems
            title={question.title}
            answer={question.answer}
            key={question.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
