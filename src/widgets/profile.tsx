import { useSessionQuery } from "@/entities/session/queries";
import { SignOut } from "@/features/auth/ui/sign-out";

export function Profile() {
    const { data: session } = useSessionQuery();

    if (!session) return null;

    return (
        <div className="flex gap-2 items-center">
            {session?.email} <SignOut />
        </div>
    );
}
