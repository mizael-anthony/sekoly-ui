"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, KeyRound } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Demande envoyée",
        description:
          "Si un compte est associé à cet email, vous recevrez un lien de réinitialisation.",
        duration: 5000,
      });
      // Simulate sending a reset link
      console.log(
        `Reset link: ${window.location.origin}/reset-password?token=simulated-token`
      );
      setEmail("");
    }, 2000);
  };

  return (
    <div className="w-full space-y-6 bg-white/10 p-8 rounded-xl backdrop-blur-md shadow-2xl">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <KeyRound className="h-12 w-12 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Mot de passe oublié
        </h2>
        <p className="text-gray-300">
          Entrez votre email pour réinitialiser votre mot de passe
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-white/20 text-white placeholder:text-gray-400 border-white/30 focus:border-blue-400 focus:ring-blue-400"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            "Réinitialiser le mot de passe"
          )}
        </Button>
      </form>
      <div className="text-center">
        <Link
          href="/"
          className="text-sm text-blue-300 hover:text-blue-100 transition-colors"
        >
          Retour à la connexion
        </Link>
      </div>
    </div>
  );
}
