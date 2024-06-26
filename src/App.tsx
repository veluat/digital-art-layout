import {Header} from "@layout/header";
import {Main} from "@layout/sections/main-section-1";
import {ArtOfWeek} from "@layout/sections/art-of-week-section-2";
import {CreateAndSell} from "@layout/sections/create-and-sell-section-3";
import {PopularArtists} from "@layout/sections/pop-artists-section-4";
import {Subscribe} from "@layout/sections/subscribe-section-5";
import {Footer} from "@layout/footer";
import {S} from '@/App.styled.ts'

export function App() {
    return (
        <S.AppContainer>
            <Header/>
            <Main/>
            <ArtOfWeek/>
            <CreateAndSell/>
            <PopularArtists/>
            <Subscribe/>
            <Footer/>
        </S.AppContainer>
    )
}