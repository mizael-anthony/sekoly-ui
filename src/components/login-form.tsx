"use client";

import type React from "react";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Loader2, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      if (username === "secretary" && password === "password") {
        toast({
          title: "Connexion réussie",
          description: "Bienvenue, Secrétaire !",
          duration: 5000,
        });
        // Redirect to dashboard or home page
      } else {
        toast({
          title: "Échec de la connexion",
          description: "Nom d'utilisateur ou mot de passe invalide",
          variant: "destructive",
          duration: 5000,
        });
      }
    }, 2000);
  };

  return (
    <div className="w-full space-y-6 bg-white/10 p-8 rounded-xl backdrop-blur-md shadow-2xl">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Lock className="h-12 w-12 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Connexion Secrétaire
        </h2>
        <p className="text-gray-300">
          Accédez au système d'inscription des élèves
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full bg-white/20 text-white placeholder:text-gray-400 border-white/30 focus:border-blue-400 focus:ring-blue-400"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            "Se connecter"
          )}
        </Button>
      </form>
      <div className="text-center">
        <Link
          href="/forgot-password"
          className="text-sm text-blue-300 hover:text-blue-100 transition-colors"
        >
          Mot de passe oublié ?
        </Link>
      </div>
    </div>
  );
}
