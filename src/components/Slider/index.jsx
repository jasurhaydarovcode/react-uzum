import React from 'react'

// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { SplideWrapper } from './style';

const SplideElements = [
    {
        id: 1,
        image: "https://images.uzum.uz/cq9utusqvss6ad8i41gg/main_page_banner.jpg",
    },
    {
        id: 2,
        image: "https://images.uzum.uz/cpv9gs36eisq2rkdu35g/main_page_banner.jpg",
    },
    {
        id: 3,
        image: "https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg",
    },
    {
        id: 4,
        image: "https://images.uzum.uz/cq1uv5b5qt1gj8ddqd30/main_page_banner.jpg",
    },
    {
        id: 5,
        image: "https://images.uzum.uz/cq17tkosarnfdo9a1ev0/main_page_banner.jpg",
    },
    {
        id: 6,
        image: "https://images.uzum.uz/cpv9a2r6eisq2rkdu0hg/main_page_banner.jpg",
    },
    {
        id: 7,
        image: "https://images.uzum.uz/cq2016gsarnfdo9a6hg0/main_page_banner.jpg",
    },
    {
        id: 8,
        image: "https://images.uzum.uz/cq204qb5qt1gj8ddqqag/main_page_banner.jpg",
    },
    {
        id: 9,
        image: "https://images.uzum.uz/cq2ic5b6eisq2rkegu80/main_page_banner.jpg",
    },
    {
        id: 10,
        image: "https://images.uzum.uz/cq15r2j5qt1gj8ddljsg/main_page_banner.jpg",
    },
    {
        id: 11,
        image: "https://images.uzum.uz/cq14lb8sarnfdo9a0nkg/main_page_banner.jpg",
    },
    {
        id: 12,
        image: "https://images.uzum.uz/cq6fm0r6eisq2rkf8q7g/main_page_banner.jpg",
    },
    {
        id: 13,
        image: "https://images.uzum.uz/cq14vnr6eisq2rke7ne0/main_page_banner.jpg",
    },
    {
        id: 14,
        image: "https://images.uzum.uz/cq150rr5qt1gj8ddlcbg/main_page_banner.jpg",
    },
    {
        id: 15,
        image: "https://images.uzum.uz/cq151sr6eisq2rke7o70/main_page_banner.jpg",
    },
    {
        id: 16,
        image: "https://images.uzum.uz/cq152n36eisq2rke7oh0/main_page_banner.jpg",
    },
    {
        id: 17,
        image: "https://images.uzum.uz/cq2me10sarnfdo9aavd0/main_page_banner.jpg",
    },
    {
        id: 18,
        image: "https://images.uzum.uz/cq1uvhr6eisq2rkedagg/main_page_banner.jpg",
    },
]

const Slider = () => {
    return (
        <SplideWrapper>
            <Splide options={{
                type: "loop",
            }}
             aria-label="My Favorite Images">
                {SplideElements.map((item) => {
                    return (
                        <SplideSlide key={item.id}>
                            <Link to={`slider/${item.id}`}>
                                <img src={item.image} alt={item.id} />
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </SplideWrapper>
    )
}

export default Slider