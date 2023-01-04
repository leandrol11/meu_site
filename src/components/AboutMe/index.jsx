import TextContainer from "components/TextContainers/index"
import styled from "styled-components"


const SectionContainer = styled.section`
    display: flex;
    padding: 2rem;
    padding-top: 7rem;

    @media (max-width: 900px) {
        flex-direction: column;
        padding-top: 0;
    }
`


export default function AboutMe() {
    return (
        <SectionContainer>
            <TextContainer />
        </SectionContainer>
    )
}