import { User } from "@prisma/client"

type SafeUser = Omit<User, 'emailVerified'> & {
    emailVerified: string | null
}

export default SafeUser;