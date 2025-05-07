"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function resetPasswordAction(formData: FormData) {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  
  if (!password || !confirmPassword) {
    return { error: "Please fill in all fields" };
  }
  
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }
  
  if (password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }
  
  try {
    const supabase = await createClient();
    
    const { error } = await supabase.auth.updateUser({
      password: password,
    });
    
    if (error) {
      return { error: error.message };
    }
    
    revalidatePath("/");
    redirect("/login?message=Password updated successfully");
  } catch (error) {
    return { error: "Failed to reset password. Please try again." };
  }
} 