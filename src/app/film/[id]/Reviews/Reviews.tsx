"use client";

import { FC } from "react";

import { Review } from "@components/Review/Review";

import { useGetReviewQuery } from "@store/services/movieApi";

interface ReviewsProps {
    id: string;
}

export const Reviews: FC<ReviewsProps> = ({ id }) => {
    const { data, isLoading, error } = useGetReviewQuery(id);
    return (
        data && (
            <>
                {data.map((item) => (
                    <Review key={item.id} {...item} />
                ))}
            </>
        )
    );
};
