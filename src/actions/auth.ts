"use server";

import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Le nom d'utilisateur est requis"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

const forgotPasswordSchema = z.object({
  email: z.string().email("Adresse email invalide"),
});

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export async function login(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const result = loginSchema.safeParse({ username, password });

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message };
    }

    // Vérification des identifiants (à remplacer par une vérification réelle dans une base de données)
    if (username === "secretary" && password === "password") {
      return {
        success: true,
        message: "Connexion réussie",
      };
    } else {
      return {
        success: false,
        message: "Nom d'utilisateur ou mot de passe invalide",
      };
    }
  } catch (error) {
    console.error("Erreur:", error);
    return {
      success: false,
      message: "Une erreur inattendue s'est produite. Veuillez réessayer.",
    };
  }
}

export async function forgotPassword(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");

    const result = forgotPasswordSchema.safeParse({ email });

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message };
    }

    // Ici, vous implémenteriez la logique réelle pour envoyer un email de réinitialisation
    // Pour cet exemple, nous simulons simplement un succès
    return {
      success: true,
      message:
        "Si un compte est associé à cet email, vous recevrez un lien de réinitialisation.",
    };
  } catch (error) {
    console.error("Erreur:", error);
    return {
      success: false,
      message: "Une erreur inattendue s'est produite. Veuillez réessayer.",
    };
  }
}

export async function resetPassword(prevState: any, formData: FormData) {
  try {
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const result = resetPasswordSchema.safeParse({ password, confirmPassword });

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message };
    }

    // Ici, vous implémenteriez la logique réelle pour réinitialiser le mot de passe
    // Pour cet exemple, nous simulons simplement un succès
    return {
      success: true,
      message: "Votre mot de passe a été réinitialisé avec succès.",
    };
  } catch (error) {
    console.error("Erreur:", error);
    return {
      success: false,
      message: "Une erreur inattendue s'est produite. Veuillez réessayer.",
    };
  }
}
