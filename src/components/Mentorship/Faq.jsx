import FaqItem from './FaqItem';
import React, { useState } from 'react';
import StillHaveQuestion from './StillHaveQuestion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const faqData = [
    {
      question: 'What is this mentorship program about?',
      content:
        'The mentorship program is designed to provide guidance, support, and learning opportunities for individuals who are seeking to develop specific skills, explore new career paths, or enhance their personal and professional growth. Mentees are matched with mentors who have relevant expertise and experience in their areas of interest.Through regular interactions, mentors offer valuable insights, advice, and feedback to help mentees navigate challenges, set goals, and make informed decisions. Mentees can benefit from mentorship in various ways, such as gaining industry knowledge, expanding their networks, improving communication skills, and building confidence.Overall, the mentorship program aims to foster meaningful connections between mentors and mentees, promote continuous learning and development, and empower individuals to achieve their personal and professional aspirations.',
    },
    {
      question: 'What kind of support can I expect from my mentor?',
      content:
        'Mentors are there to provide comprehensive support across various aspects of your personal and professional development journey. They offer guidance and advice on specific challenges you encounter, helping you navigate complexities and overcome obstacles. Mentors also serve as sounding boards, providing feedback on your ideas, projects, and strategies. They share their expertise, knowledge, and experiences, offering valuable insights and perspectives. Moreover, mentors facilitate networking opportunities, introducing you to relevant contacts and communities that can further your goals. They may also provide access to resources, tools, and opportunities for skill development, helping you enhance your capabilities and competencies. Additionally, mentors offer encouragement, motivation, and accountability, inspiring you to stay focused, resilient, and committed to your growth. Overall, mentors play a crucial role in supporting your journey toward personal and professional success, providing guidance, encouragement, and empowerment every step of the way.',
    },
    {
      question: 'What happens if I miss a session?',
      content:
        "If you miss a session with your mentor, it's essential to communicate with them as soon as possible to reschedule. Depending on the mentorship program's policies and your mentor's availability, you may be able to arrange a makeup session. Open and transparent communication is key in these situations to ensure both parties are on the same page regarding expectations and scheduling adjustments. Additionally, take responsibility for missing the session and express your commitment to making up for it. This demonstrates respect for your mentor's time and dedication to the mentorship process. Overall, while missing a session can happen occasionally, proactive communication and a willingness to reschedule can help maintain the momentum and effectiveness of the mentorship relationship.",
    },
    {
      question: 'How often are the sessions and for how long?',
      content:
        'The frequency and duration of mentorship sessions vary depending on the specific program and the needs of the participants. Typically, mentorship sessions occur on a regular basis, such as weekly, bi-weekly, or monthly, and may last anywhere from 30 minutes to an hour or longer per session. The frequency and duration are often agreed upon by the mentor and mentee based on factors such as the goals of the mentorship, availability of both parties, and the complexity of topics to be discussed. Regular sessions allow for consistent progress, ongoing support, and meaningful interaction between the mentor and mentee.',
    },
    {
      question: 'Is there any flexibility in scheduling sessions?',
      content:
        'Yes, mentorship programs often provide flexibility in scheduling sessions to meet the diverse needs of participants. This can include offering multiple time slots throughout the week, accommodating ad hoc meetings for urgent matters, rescheduling sessions when necessary, utilizing virtual communication tools for remote meetings, and extending availability to evenings or weekends. This flexibility enables mentors and mentees to collaborate effectively while accommodating their respective schedules and commitments, ultimately fostering a more productive and supportive mentorship experience.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Toggle open/close
  };

  return (
    <section className="flex flex-col px-5 lg:px-20 pt-12 pb-16 bg-[#F1FCF5] w-full">
      <div className="heading flex flex-col space-y-2 items-center mt-10 mb-14">
        <div className="text-2xl text-center font-semibold">
          Frequently Asked Questions
        </div>
        <div className="text-[#667085] text-center">
          Everything you need to know about the product and billing.
        </div>
      </div>

      <div className="faq-container mt-3">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.content}
            isOpen={openIndex === index} // Determine if this item is open
            onClick={() => handleToggle(index)} // Handle the toggle on click
            isLast={index === faqData.length - 1} // Check if it's the last item
          />
        ))}
      </div>

      <div className="mt-8">
        <StillHaveQuestion />
      </div>
    </section>
  );
};

export default FAQ;
