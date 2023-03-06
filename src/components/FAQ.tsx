import { faqQuestions } from "@/data/data";
import FAQItem from "./FAQItem";

const FAQ = () => {
  return (
    <div className=" pt-8 flex flex-col  place-items-center">
      <p className=" font-bebas text-6xl">FAQ</p>
      <div className=" flex flex-col w-[46rem] items-center mt-8">
        {faqQuestions.map((question) => (
          <FAQItem
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
