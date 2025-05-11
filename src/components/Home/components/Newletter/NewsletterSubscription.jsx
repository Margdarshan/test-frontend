import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import ImageContainer from './ImageContainer';

function NewsletterSubscription() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-16 pt-20 bg-violet-50 max-md:px-5">
      <section className="flex flex-wrap gap-10 max-w-full w-[972px]">
        <article className="flex-auto pt-2.5 pr-10 pb-12 pl-2.5 bg-white rounded-xl border-white border-solid border-[10px] max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <ImageContainer />
            <SubscriptionForm />
          </div>
        </article>
      </section>
    </main>
  );
}

export default NewsletterSubscription;
