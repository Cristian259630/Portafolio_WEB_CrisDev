
import React from 'react';


interface SectionTitleProps {
  title: string;
}


const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="section-title">{title}</h2>
  );
};

export default SectionTitle;