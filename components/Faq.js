import React from "react";

const Faq = ({ faq }) => {
  const { question, answer, id } = faq;
  return (
    <article>
      <h3 className="heading-3">{question}</h3>

      <p dangerouslySetInnerHTML={{ __html: answer }}></p>
    </article>
  );
};

export default Faq;
