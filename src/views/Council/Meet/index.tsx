import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GoNearOut, GoNear, GoBtnsGroup, GoNearLeft, GoNearRight, GoBtn, GoBtns } from "./Meet.style";
import CoinDesk from "../../../assets/svg/coindesklogo.svg";
import Coin from "../../../assets/svg/cointelegraphlogo.svg";
import Yahoo from "../../../assets/svg/Yahoologo.svg";
import Youtube from "../../../assets/svg/YouTubeLogo.svg";
import { BitcoinLogo } from "../../../assets/icon/LogoIcon";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function index() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const Loading = () => {
        return (
            <>
                <Skeleton duration={2} borderRadius={5} baseColor='grey' width={180} className='logoloading' />
            </>
        )
    }
    return (
        <GoNearOut>
            <GoNear>
                <GoNearLeft>
                    <GoBtnsGroup>
                        <GoBtns>
                            <GoBtn>{loading ? <Loading /> : <Image src={Yahoo} layout="fill" objectFit="cover" />}</GoBtn>
                            <GoBtn>{loading ? <Loading /> : <Image src={Youtube} layout="fill" objectFit="cover" />}</GoBtn>
                            <GoBtn>{loading ? <Loading /> : <BitcoinLogo />}</GoBtn>
                            <GoBtn>{loading ? <Loading /> : <Image src={CoinDesk} layout="fill" objectFit="cover" />}</GoBtn>
                            <GoBtn>{loading ? <Loading /> : <Image src={Youtube} layout="fill" objectFit="cover" />}</GoBtn>
                        </GoBtns>
                        <GoBtns>
                            <GoBtn>{loading ? <Loading /> : <BitcoinLogo />}</GoBtn>
                            <GoBtn>{loading ? <Loading /> : <Image src={Coin} layout="fill" objectFit="cover" />}</GoBtn>
                            <GoBtn>{loading ? <Loading /> : <Image src={CoinDesk} layout="fill" objectFit="cover" />}</GoBtn>
                            <GoBtn>{loading ? <Loading /> : <Image src={Yahoo} layout="fill" objectFit="cover" />}</GoBtn>
                            <GoBtn>{loading ? <Loading /> : <Image src={Coin} layout="fill" objectFit="cover" />}</GoBtn>
                        </GoBtns>
                    </GoBtnsGroup>
                </GoNearLeft>
                <GoNearRight />
            </GoNear>
        </GoNearOut>
    );
}
