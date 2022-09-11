/**
 * @Author aiden
 * @Date 2021-02-25 16:45:54
 * @Last Modified by: Aiden.Ark
 * @Last Modified time: 2022-07-01 15:25:50
 */
import React from "react";
import { RouteObject } from "react-router-dom";
import Layout1 from "@/Layout/defaultLayout";
import Layout2 from "@/Layout/Layout2";
import LazyRoute from "./LazyRoute";
const HomeLazy = React.lazy(() => import("@/views/Home"));
const AuthLazy = React.lazy(() => import("@/views/Auth"));
const Bet = React.lazy(() => import("@/views/Bet"));
const TablePick = React.lazy(() => import("@/views/TablePick"));
const Classic = React.lazy(() => import("@/views/Classic"));
const Demo = React.lazy(() => import("@/views/Demo"));
const MultiBet = React.lazy(() => import("@/views/MultiBet"));
const LuxuryBet = React.lazy(() => import("@/views/LuxuryBet"));
const Test = React.lazy(() => import("@/views/test"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomeLazy />,
      },
    ],
  },
  {
    path: "/bet",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: (
          <LazyRoute options={{ needAuth: true }}>
            <Bet />
          </LazyRoute>
        ),
      },
    ],
  },
  {
    path: "/luxuryBet",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: (
          <LazyRoute options={{ needAuth: true }}>
            <LuxuryBet />
          </LazyRoute>
        ),
      },
    ],
  },
  {
    path: "/tablePick",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: (
          <LazyRoute options={{ needAuth: true }}>
            <TablePick />
          </LazyRoute>
        ),
      },
    ],
  },
  {
    path: "/classic",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: (
          <LazyRoute options={{ needAuth: true }}>
            <Classic />
          </LazyRoute>
        ),
      },
    ],
  },
  {
    path: "/multiBet",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: <MultiBet />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <LazyRoute>
        <AuthLazy />
      </LazyRoute>
    ),
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];
export default routes;
