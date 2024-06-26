import React from "react";
import {S} from "@layout/sections/main-section-1/main-photo-content/promotion/promotion-status/PromotionStatus.styled.ts";
import {Span} from "@components/span";
import {FlexWrapper} from "@components/flex-wrapper";
import {theme} from "@assets/style/Theme.ts";

export const PromotionStatus: React.FC<PromotionStatusPropsType> = ({title, value}) => {
    return (
        <S.PromotionStatusWrap>
            <Span spanValue={title} color={theme.colors.primary} fontSize='14px' fontWeight='500'/>
            <FlexWrapper align='center' gap='12px'>
                <Span spanValue={value} fontSize='700' lineHeight='20px'/>
            </FlexWrapper>
        </S.PromotionStatusWrap>
    )
}

type PromotionStatusPropsType = {
    title: string
    value: string
}