import styled from "styled-components";

const Btn = styled.a` 
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: #2F8F9D;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export default function BackToTop() {
    return (
        <Btn href="#">⮝</Btn>
    )
}