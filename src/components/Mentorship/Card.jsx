import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';

function FeatureItem({ icon, children }) {
  const iconComponent =
    icon === 1 ? (
      <CheckCircleIcon sx={{ color: 'green' }} />
    ) : (
      <CancelIcon sx={{ color: 'red' }} />
    );

  return (
    <div className="flex gap-5 mt-5">
      <div className="shrink-0 ml-5 rounded-full aspect-square h-[13px] w-[13px]">
        {iconComponent}
      </div>
      <div className="flex-auto">{children}</div>
    </div>
  );
}
FeatureItem.propTypes = {
  icon: PropTypes.number,
  children: PropTypes.node,
}

const Card = ({ title, price, features, content, icon, color })  =>{
  return (
    <section className="flex flex-col grow px-2 pt-2 pb-3.5 mx-auto w-full max-w-[350px] text-sm rounded-xl bg-violet-800 bg-opacity-10 text-slate-900 text-opacity-70 max-lg:mt-5">
      <div
        className={`flex flex-col px-4 pt-8 pb-3.5 text-xs leading-4 text-center rounded-xl text-neutral-600 max-lg:px-5 ${color}`}
      >
        <img
          loading="lazy"
          src={icon}
          alt="Decorative icon"
          className="self-center aspect-square w-[45px]"
        />
        <p className="mt-7 h-10">{content}</p>
      </div>
      <h2 className="mt-7 ml-5 text-xl text-slate-900">{title}</h2>
      <div className="mt-8 ml-5 text-2xl text-green-500">₹{price}</div>
      <div className="mt-3 ml-6 text-xs text-neutral-500">PER ACTIVE USER</div>
      {features.map((feature, index) => (
        <FeatureItem key={index} icon={feature.icon}>
          {feature.text}
        </FeatureItem>
      ))}
      <button className="justify-center items-center px-16 py-2 mt-6 mr-2.5 ml-4 text-base font-medium tracking-wide bg-violet-800 rounded-lg text-neutral-100 max-lg:px-5 whitespace-nowrap">
        Get Started
      </button>
    </section>
  );
}
Card.propTypes  = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.object),
  content: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  };

export default function CardsContainer(props) {
  const cardsData = [
    {
      title: props.title,
      price: props.price,
      features: props.features,
      content: props.content,
      icon: props.icon,
      color: props.color,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5 items-center mx-12 lg:mx-auto">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            price={card.price}
            features={card.features}
            content={card.content}
            icon={props.icon}
            color={props.color}
          />
        ))}
      </div>
    </>
  );
}

CardsContainer.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.object),
  content: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
}