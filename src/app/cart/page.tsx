"use client";

import { FC } from "react";
import { useSelector } from "react-redux";

import { EmptyContent } from "@components/EmptyContent/EmptyContent";

import { SelectedMovies } from "./SelectedMovies/SelectedMovies";
import { cartItemsLengthSelector } from "./services/selectors";

const Cart: FC = () => {
    const cartItemsLength = useSelector(cartItemsLengthSelector);

    return cartItemsLength > 0 ? <SelectedMovies /> : <EmptyContent text="Корзина пустая" />;
};

export default Cart;
