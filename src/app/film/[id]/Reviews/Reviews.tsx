"use client";

import { FC } from "react";

import { Review } from "@components/Review/Review";

import { Review as ReviewType } from "@store/services/movieApi.types";

interface ReviewsProps {
    reviews: ReviewType[];
}

export const Reviews: FC<ReviewsProps> = ({ reviews }) => {
    return (
        <>
            {reviews.map((item) => (
                <Review key={item.id} {...item} />
            ))}
        </>
    );
};
