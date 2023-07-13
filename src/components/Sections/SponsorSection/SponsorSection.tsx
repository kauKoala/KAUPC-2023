import LottieContainer from '@/components/UI/LottieContainer/LottieContainer';
import React from "react"
import { AiOutlineCalendar, AiOutlineTrophy } from "react-icons/ai";
import ListContainer from '@/components/UI/ListContainer/ListContainer';
import SubTitle from "@/components/UI/SubTitle/SubTitle";
import MainTitle from '@/components/UI/MainTitle/MainTitle';
import * as S from './SponsorSection.stlye'
import Link from 'next/link';

export const SponsorSection = () => {
    return(
        <S.Root>
            {/* <ListContainer>
                <h3>주관 : 한국항공대학교 소프트웨어학과, 한국항공대 알고리즘 학회 Koala</h3>
                <h4>
                    후원 : <img src='icons/startlink-logo-black.png' width="120" className="startlink-img" />
                </h4>
            </ListContainer> */}
            
                <div className='sponsorContainer'>
                    <div className='sponsorBox oner'>
                        <h3>주관</h3>
                        <h4>한국항공대학교 소프트웨어학과</h4>
                        <h4>한국항공대 알고리즘 학회</h4>
                    </div>
                    <div className='sponsorBox sponsor'>
                        <h3>후원</h3>
                        <h4>
                            <Link href={'https://startlink.io/'} target='_blank'>
                                <img src='icons/startlink-logo-black.png' width="120" className="startlink-img" />
                            </Link>
                        </h4>
                    </div>
                </div>
            
        </S.Root>
    )
};