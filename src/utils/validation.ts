import { z } from "zod";

export const reservationSchema = z
  .object({
    destination: z.string().min(1, "Destination is required"),
    startDate: z.string().min(1, "Depature Date is required"),
    returnDate: z.string().min(1, "Return Date is required"),
    travelers: z
      .string()
      .refine(
        (val) => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 10,
        {
          message: "The number of travelers must be between 1 and 10",
        }
      ),
    roomType: z.string().min(1, "The room type is required"),
    specialRequest: z
      .string()
      .max(300, "Special Request is required")
      .optional(),
  })
  .refine(
    (data) => {
      const { startDate, returnDate } = data;
      if (new Date(returnDate) < new Date(startDate)) {
        return false;
      }
      return true;
    },
    {
      message: "The return Date must be after de depature Date",
      path: ["returnDate"],
    }
  );
