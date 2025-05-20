"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 12,
  },
  {
    name: "Feb",
    total: 16,
  },
  {
    name: "Mar",
    total: 20,
  },
  {
    name: "Apr",
    total: 24,
  },
  {
    name: "May",
    total: 18,
  },
  {
    name: "Jun",
    total: 22,
  },
  {
    name: "Jul",
    total: 28,
  },
  {
    name: "Aug",
    total: 32,
  },
  {
    name: "Sep",
    total: 26,
  },
  {
    name: "Oct",
    total: 30,
  },
  {
    name: "Nov",
    total: 24,
  },
  {
    name: "Dec",
    total: 20,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Bar dataKey="total" fill="#14b8a6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
