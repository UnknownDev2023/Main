import React, { useState } from 'react';
import { FaqDataTypes } from './Faq';

interface FaqItemProps {
    faqItemData: FaqDataTypes;
    index: number;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<number>>;
}

const FaqItem = ({faqItemData, index, isExpanded, setIsExpanded}:FaqItemProps) => {
    const {question, answer} = faqItemData;

    const handleClick = (index: number) => {
        setIsExpanded(index);
    }

    return (
        <>
            <dt onClick={() => handleClick(index)}>
            {/* <dt onClick={() => setIsExpanded(!isExpanded)}> */}
                {question}
                <span>{isExpanded? '-' : '+'}</span>
            </dt>
            <dd className={isExpanded ? 'expanded' : ''}>{answer}</dd>
        </>
    )
}

export default FaqItem;