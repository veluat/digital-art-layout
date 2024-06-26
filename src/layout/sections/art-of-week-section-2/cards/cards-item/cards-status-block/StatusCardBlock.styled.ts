import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {font} from "@assets/style/Common.ts";

const StatusCardBlockWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    span {
        padding-bottom: 4px;
        ${font({
            weight: 500,
            color: theme.colors.fontGray,
            Fmax: 14,
            Fmin: 14,
        })}
    }
`

export const S = {StatusCardBlockWrap}