import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import db from "../db";

interface SalesRow extends RowDataPacket {
  month: string;
  revenue: number;
}

export const getSalesData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const [rows] = await db.query<SalesRow[]>(
    "SELECT month, revenue FROM sales ORDER BY month"
  );

  res.json(rows);
};
