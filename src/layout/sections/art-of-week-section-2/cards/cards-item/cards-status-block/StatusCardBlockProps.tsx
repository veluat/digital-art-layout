import React from "react";
import {FlexWrapper} from "@components/flex-wrapper";
import {Icon} from "@components/icon";
import {S} from "@layout/sections/art-of-week-section-2/cards/cards-item/cards-status-block/StatusCardBlock.styled.ts";

export const StatusCardBlock: React.FC<StatusCardBlockProps> = ({title, endingTime}) => {
    return (
        <S.StatusCardBlockWrap>
            <span>{title}</span>
            <FlexWrapper gap='12px' align='center'>
                <Icon IconTitle='clock'/>
                <h5>{endingTime}</h5>
            </FlexWrapper>
        </S.StatusCardBlockWrap>
    )
}

type StatusCardBlockProps = {
    title: string
    endingTime: string
}