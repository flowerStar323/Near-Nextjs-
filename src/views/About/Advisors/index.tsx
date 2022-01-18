import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import Loading from "../../../component/LearnMoreLoading";
import { LearnCardBottomTitle, VisitOpenRoleBtn, UpCards, LearnMoreOut, LearnMoreHeader, UpComTitleLeft, LearnMoreHeaderTitle, UpCard, CardImg, LearnCardTitle, IconGroup, LearnCardSubTitle } from "./Advisors.style";
import Learn1 from "assets/image/coming.jpg";
export default function LearnMore() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <LearnMoreOut>
            <LearnMoreHeader>
                <LearnMoreHeaderTitle>
                    <UpComTitleLeft>Our team & Advisors</UpComTitleLeft>
                </LearnMoreHeaderTitle>
            </LearnMoreHeader>
            <UpCards>
                <UpCard>
                    <CardImg>
                        <Image src={Learn1} layout="fill" objectPosition="cover" draggable={false} />
                    </CardImg>
                    {loading ? <Loading /> : <>
                        <LearnCardTitle>Daniel Stockhaus</LearnCardTitle>
                        <LearnCardBottomTitle>CTO & Co-Founder</LearnCardBottomTitle>
                        <LearnCardSubTitle>Serial Tech Entrepreneur, scaled companies to over 1m users and $20m annual turnover. Successful Exit.</LearnCardSubTitle>
                        <IconGroup>
                            <AiOutlineTwitter style={{ color: "#A1ABB9", fontSize: "30px", margin: "0 10px 0 20px" }} />
                            <AiFillLinkedin style={{ color: "#A1ABB9", fontSize: "30px" }} />
                        </IconGroup></>}
                </UpCard>
                <UpCard>
                    <CardImg>
                        <Image src={Learn1} layout="fill" objectPosition="cover" draggable={false} />
                    </CardImg>
                    {loading ? <Loading /> : <>
                        <LearnCardTitle>Tiago Martins</LearnCardTitle>
                        <LearnCardBottomTitle>CTO & Co-Founder</LearnCardBottomTitle>
                        <LearnCardSubTitle>Passionate product builder and senior software engineer with. Successful Exit.
                        </LearnCardSubTitle>
                        <IconGroup>
                            <AiOutlineTwitter style={{ color: "#A1ABB9", fontSize: "30px", margin: "0 10px 0 20px" }} />
                            <AiFillLinkedin style={{ color: "#A1ABB9", fontSize: "30px" }} />
                        </IconGroup></>}
                </UpCard>
                <UpCard>
                    <CardImg>
                        <Image src={Learn1} layout="fill" objectPosition="cover" draggable={false} />
                    </CardImg>
                    {loading ? <Loading /> : <>
                        <LearnCardTitle>Work with Us?</LearnCardTitle>
                        <VisitOpenRoleBtn><span>Visit open roles</span></VisitOpenRoleBtn></>}
                </UpCard>
            </UpCards>
        </LearnMoreOut>
    );
}

