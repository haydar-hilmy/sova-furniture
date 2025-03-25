"use client";

import styled from "styled-components";


const StyledFooter = styled.footer`
    padding: 20px 0;
    text-align: center;
    font-size: 0.8rem;
a{
    text-decoration: none;
    color: #6528e0;
}
`;

export const Footer = () => {
    return (
        <>
            <StyledFooter>
                <p>&copy; 2025 Sova by Haydar Hilmy</p>
                <p>
                    <a href="mailto:sova@furniture.com">Email Us</a> | 
                    <a href="tel:+0812345678">Call Us</a>
                </p>
            </StyledFooter>
        </>
    )
}