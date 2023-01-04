import styled from "styled-components";

const Container = styled.footer`
    font-size: 2rem;
    line-height: 2rem;
    padding: 2rem;
    background: #2F8F9D;
    color: white;
`

export default function Footer() {
    return (
        <Container>
            Made by Leandro Maciel
        </Container>
    )
}