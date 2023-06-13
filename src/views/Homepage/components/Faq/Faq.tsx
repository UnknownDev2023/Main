import React, { useEffect, useState } from 'react';
import FaqItem from './FaqItem';
import styled from 'styled-components';

export interface FaqDataTypes {
    question: string,
    answer: string
}

const DefList = styled.dl`
    font-size: 20px;
    counter-reset: deflist;
    dt {
       display: flex;
       background: #ddd;
       margin-bottom: 2px;
       padding: 10px;
       counter-increment: deflist;
       position: relative;
       cursor: pointer;
       &::before {
        content: 'Q'counter(deflist)':';
        padding-right: 5px;
       } 
       &::after {
        content: '?';
       }
       span {
        background: transparent;
        border: 0;
        height: 100%;
        font-size: 30px;
        position: absolute;
        top:0;
        right:0;
        cursor: pointer;
        width: 30px;
       }
    }
    dd {
        opacity: 0;
        background: #eee;
        margin: 0 0 2px;
        padding: 0 10px 0 45px;
        max-height: 0;
        overflow: hidden;
        transition: max-height .6s ease-in-out, opacity .8s;
        box-sizing: border-box;
        &::before,
        &::after {
            content: '';
            display: block;
            height: 10px;
            width 100%;
        }
        &.expanded {
            max-height: 105px;
            opacity: 1
        }    
    }
`;

const Faq = () => {
    const [faqData, setFaqData] = useState([]);
    const [isExpanded, setIsExpanded] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/faq')
            .then(response => response.json())
            .then(setFaqData);
    },[]);

    return (
        <DefList>
            {
                faqData.map((data, index) => (
                    <FaqItem 
                        key={index}
                        faqItemData={data} 
                        index={index} 
                        isExpanded={isExpanded === index} 
                        setIsExpanded={setIsExpanded} />
                ))
            }
        </DefList>
    )
}

export default Faq;