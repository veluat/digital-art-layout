import {FlexWrapper} from "@components/flex-wrapper";
import {SectionContainer} from "@components/section-container";
import {Title} from "@components/title";
import {Cards} from "@layout/sections/art-of-week-section-2/cards";
import {useResponsiveSize} from "@/hook";
import {CardData} from "@layout/sections/art-of-week-section-2/card-data";
import {Button} from "@components/button/Button.tsx";
import {SectionHeader} from "@layout/sections/art-of-week-section-2/ArtOfWeek.styled.ts";
import {Fade} from "react-awesome-reveal";

export const ArtOfWeek = () => {
    const isHide = useResponsiveSize(1410)
    const isMobile = useResponsiveSize(576)
    return (
        <Fade cascade={true} damping={1} delay={400} triggerOnce={true}>
            <SectionContainer id="amazing">
                <FlexWrapper direction='column' gap={isHide ? '32px' : '64px'}>
                    <SectionHeader isHide={isHide}>
                        <Title title={<div><span>Amazing</span> and Super Unique Art of This <span>Week</span></div>}
                               width={isMobile ? '357px' : '600px'}/>
                        <Button btnType='primary' buttonName='See All' isHide={isHide}/>
                    </SectionHeader>

                    <Cards
                        cardData={CardData}
                        width='360px'
                        height="340px"
                        radius="16px"
                    />

                    {isHide &&
                        <FlexWrapper justify='center'>
                            <Button btnType='primary' buttonName='See All'/>
                        </FlexWrapper>}
                </FlexWrapper>
            </SectionContainer>
        </Fade>
    )
}