import React from 'react';
import PropTypes from 'prop-types';

CardStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

const CardStyle = ({ children }) => {
  return (
    <section className="flex flex-col px-5 pt-4 pb-10 text-base leading-5 bg-white rounded-xl shadow-xl max-w-[28.58rem] text-zinc-800">
      {children}
    </section>
  );
};

export default CardStyle;
