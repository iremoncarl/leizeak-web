'use client'
import { FiArrowRight } from "react-icons/fi";
import { getSupabaseBrowserClient } from "@/lib/auth/browser-client";
import { useRouter } from "next/navigation";


export default function CerrarSesionBtn({texto}) {
    const router = useRouter();

    async function handleSignOut() {
        const supabase = getSupabaseBrowserClient();
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.log(error);
            return;
        }
        router.push("/");
        router.refresh();
    }

    return (          
        <button onClick={() => handleSignOut()} className="flex gap-3 items-center border border-[#A31B00] px-2 py-3 rounded-lg cursor-pointer bg-[#CF2100] hover:bg-[#FF2900] transition ">
            <p className="text-sm ">{texto}</p>
            <FiArrowRight className="w-4 xl:w-5 h-4 xl:h-5" />
        </button>           
    );
}
