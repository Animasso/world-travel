import { z } from "zod";

export const reservationSchema = z
  .object({
    destination: z.string().min(1, "La destination est requise"),
    startDate: z.string().min(1, "La date de départ est requise"),
    returnDate: z.string().min(1, "La date de retour est requise"),
    travelers: z
      .string()
      .refine(
        (val) => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 10,
        {
          message: "Le nombre de voyageurs doit être entre 1 et 10",
        }
      ),
    roomType: z.string().min(1, "Le type de chambre est requis"),
    specialRequest: z
      .string()
      .max(300, "La demande spéciale ne doit pas dépasser 300 caractères")
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
      message: "La date de retour doit être après la date de départ",
      path: ["returnDate"], // Spécifie le champ où l'erreur doit être associée
    }
  );
