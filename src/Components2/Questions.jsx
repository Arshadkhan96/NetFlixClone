// const Questions = ()=>{
//     return(
//         <>
//         <div className="container-questions">
//              <h1>Frequently Asked Questions </h1>
            
//         <div className="questions">
//             <div className="asked">
//                 <p >What is Netflix?</p>
//                 <p className="icon">+</p>
//             </div>

//             <div className="asked">
//             <p>How much does Netflix cost?</p>
//             <p className="icon">+</p>
//             </div>

//             <div className="asked">
//             <p>Where can I watch?</p>
//             <p className="icon">+</p>
//             </div>

//             <div className="asked">
//             <p>How do I cancel</p>
//             <p className="icon">+</p>
//             </div>

//             <div className="asked">
//             <p>What can I wacth on Netflix?</p>
//             <p className="icon">+</p>
//             </div>

//             <div className="asked">
//             <p>Is Netflix good for kids?</p>
//             <p className="icon">+</p>
//             </div>
//         </div>
//         </div>
//         </>
//     )
// }
// export default Questions;






const Questions = () => {
  const toggleAnswer = (e) => {
    const answer = e.currentTarget.nextElementSibling;
    const icon = e.currentTarget.querySelector('.icon');
    
    answer.classList.toggle('show');
    icon.textContent = answer.classList.contains('show') ? '×' : '+';
  };

  const questions = [
    {
      id: 1,
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device."
    },
    {
      id: 4,
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees."
    },
    {
      id: 5,
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      id: 6,
      question: "Is Netflix good for kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
    }
  ];

  return (
    <div className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      
      <div className="faq-list">
        {questions.map((item) => (
          <div key={item.id} className="faq-item">
            <div className="faq-question" onClick={toggleAnswer}>
              <p>{item.question}</p>
              <span className="icon">+</span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions;