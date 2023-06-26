"use client";

import { FC } from "react";
import { useSelector } from "react-redux";

import { EmptyContent } from "@components/EmptyContent/EmptyContent";

import { cartItemsLengthSelector } from "./services/selectors";

import { SelectedMovies } from "./SelectedMovies/SelectedMovies";

const Cart: FC = () => {
    const cartItemsLength = useSelector(cartItemsLengthSelector);

    return cartItemsLength > 0 ? <SelectedMovies /> : <EmptyContent text="Корзина пустая" />;
};

export default Cart;
